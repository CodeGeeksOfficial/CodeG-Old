const User = require("../models/User");

exports.getUserInfo = (req, res, next) => {
  const user = req.user;
  req.res.status(200).json({
    success: true,
    user: {
      name: user.name,
      username: user.username,
      email: user.email,
      gender: user.gender,
    },
  });
};
