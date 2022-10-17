const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.register = async (req, res, next) => {
  console.log("Register route");
  const {
    name,
    username,
    email,
    password,
    gender,
    preferredProgrammingLanguage,
  } = req.body;
  try {
    // TODO: Add error for duplicate user creation
    const user = await User.create({
      name,
      username,
      email,
      password,
      gender,
      preferredProgrammingLanguage,
    });

    const verifyToken = crypto.createHash("sha256").digest("hex");
    user.verificationToken = verifyToken;
    user.save();

    const verifyUrl = `http://localhost:3000/verifyUser/${verifyToken}`; // TODO: make generic instead of localhost
    // const verifyUrl = `http://localhost:${process.env.PORT}/api/auth/verifyUser/${verifyToken}`; // TODO: make generic instead of localhost
    const message = `<h2> Hello ${name},</h2>
    <h3> We Welcome to the community !!</h3>
    Please visit the <b>link given below</b> to verify your account and start your journey!<br>
    ${verifyUrl}<br>
    <br>
    <h4> Happy Hacking ! </h4>`;

    try {
      await sendEmail({
        to: user.email,
        subject: "Account Verification Request",
        text: message,
      });

      res.status(201).json({
        success: true,
        data: "User Created & Verification Email Sent",
      });
    } catch (err) {
      return next(new ErrorResponse("User cannot be created", 500));
    }

    // sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

exports.verifyUser = async (req, res, next) => {
  console.log("Verify Route");
  const verificationToken = req.params.verifyToken;

  try {
    const user = await User.findOne({
      verificationToken,
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Verification Token", 400));
    }

    user.verifyUser();
    user.verificationToken = undefined;
    await user.save();

    sendToken(user, 201, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  console.log("login route");
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    const userVerified = await user.isVerified;
    if (!userVerified) {
      const verifyToken = await user.verificationToken;
      const verificationUrl = `http://localhost:${process.env.PORT}/api/auth/verifyUser/${verifyToken}`;
      return next(
        new ErrorResponse(
          `Please verify your account first at ${verificationUrl}`,
          401
        )
      );
    } else {
      sendToken(user, 201, res);
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`; // TODO: make generic instead of localhost
    const message = `<h3> Hello ${user.name}, </h3>
    <b> You have requested a password reset. </b><br>
    Please visit the <b>link given below</b> to reset your password:<br>
    ${resetUrl}`;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(201).json({ success: true, data: "Email Sent" });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();
      return next(new ErrorResponse("Email Could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

exports.resetpassword = async (req, res, next) => {
  console.log("hi");
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(201).json({
      success: true,
      data: "Password Reset Success",
    });
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
