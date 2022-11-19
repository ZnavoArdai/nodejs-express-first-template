const express = require("express");
const cors = require("cors");
const travelRouter = require("./routes/travel-router");
const flightsRouter = require("./routes/flights-router");
const registerRouter = require("./routes/register-routers");
const dotenv=require("dotenv")
dotenv.config()
const users = require("./model/user");
const {validatEmaul,validatPassword,sumValidation}=require("./validation/userValidat")

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
app.use("/travel", travelRouter);
app.use("/flights",flightsRouter);
app.use("/register",registerRouter)

const port = 8080;

app.get("/", (req, res) => {
  res.send({ message: "server online" });
});
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
