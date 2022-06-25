const mongoose = require("mongoose");

const connectDB = async () => {
  //   mongoose.connect(process.env.MONGO_URI);

  //   const db = mongoose.connection;
  //   db.on("error", console.error.bind(console, "connection error:"));
  //   db.once("open", (data) => {
  //     console.log("Database connected" + data);
  //   });
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
