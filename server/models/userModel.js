const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  userName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
    required: true,
  },

  preferedLanguage: {
    type: [String],
    enum: ["c++", "java", "python"],
    required: true,
  },

  score: {
    type: Number,
    default: 0,
  },

  email: {
    type: String,
  },

  Occupation: {
    type: String,
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

const User = mongoose.model("User", userSchema);

module.exports = User;