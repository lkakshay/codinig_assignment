const express = require("express");
const app = express();
const connect = require("./src/configs/db");
const port = 8080;
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const regesterController = require("./src/controllers/authController/registerController");
const loginController = require("./src/controllers/authController/loginController");
const userRoute=require('./src/routes/userRoutes')
app.post("/api/register", regesterController);
app.post("/api/login", loginController);
app.use("/api/user",userRoute);

app.listen(port, async () => {
  try {
    connect();
    console.log(`server started at ${port}`);
  } catch (e) {
    console.log(e.message, "lk");
  }
});
