const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/connectDB");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
