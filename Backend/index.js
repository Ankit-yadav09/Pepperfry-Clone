const express = require("express");
const { connect } = require("./configs/db");
require("dotenv").config();
const { furnitureRouter}=require("./routes/furnitureRoute")
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use("/fur", furnitureRouter)


app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connected to data base");
  } catch (err) {
    console.log(`err while starting the  port on ${process.env.port}`);
  }

  console.log(`connected to server on  ${process.env.port}`);
});
