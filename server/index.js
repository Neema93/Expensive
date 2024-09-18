const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//middleware
app.use(cors());
app.use(express.json());

//Routes

//add user
app.post("/users",async(req,res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});
//get user by name

//add expenses

//edit expenses

//remove expenses


app.listen(9000,() => {
  console.log("server start port 9000");
});

