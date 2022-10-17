require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));

app.use(errorHandler); // This handler should be placed at the last.

const server = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
