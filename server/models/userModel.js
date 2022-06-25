const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  userFullName: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  userEmail: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  preferedLanguage: {
    type: String,
    enum: ["c++", "java", "python"],
    required: true,
  },

  score: {
    type: Number,
    default: 0,
  },

  occupation: {
    type: String,
    enum: ["Student", "Job aspirant", "Working professional", "Other"],
    required: true,
  },

  badge: {
    type: String,
    default: "codie",
  },

  institution: {
    type: String,
    required: true,
  },

  passingYear: {
    type: Number,
    required: true,
  },

  submissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Submission",
    },
  ],

  // TODO: submission count
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
