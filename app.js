const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express + MongoDB is working!");
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
