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
    // eslint-disable-next-line camelcase
    const {user_username , user_password} = req.body;
    // eslint-disable-next-line camelcase
    const newUser = await pool.query("INSERT INTO users ( user_username , user_password ) VALUES ($1,$2)",[ user_username, user_password ]);
    res.json(newUser);
  } catch (err) {
    console.log(err.message);
  }
});
//get user by name
app.get("/users/:user_name",async(req,res) =>{
  try {
    // eslint-disable-next-line camelcase
    const { user_name } = req.params;
    // eslint-disable-next-line camelcase
    const getUser = await pool.query("SELECT * FROM users WHERE user_username = $1 ",[ user_name ]);
    res.json(getUser.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});
// get expenses by user id
app.get("/expenses/:user_id",async(req,res) =>{
  try {
    const { userId } = req.params;
    const getExpenses = await pool.query("SELECT * FORM expenses WHERE user_id = $1 ",[ userId ]);
    res.json(getExpenses.rows);

  } catch (err) {
    console.log(err.message);
  }
});
//add expenses
app. post("/expenses",async(req,res) => {
  try {
    // eslint-disable-next-line camelcase
    const {description, amount, user_id} = req.body;
    // eslint-disable-next-line camelcase
    const newExpenses = await pool.query("INSERT INTO expenses (description, amount,user_id) VALUES ($1,$2,$3)",[ description, amount, user_id]);
    res.json(newExpenses);
  } catch (err) {
    console.log(err.message);
  }
});
//edit expenses
app.put("/expenses/:id",async(req,res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateexpenses = await pool.query("UPDATE expenses SET description = $1 WHERE id = $2",[description,id]);
    res.json(updateexpenses);
  } catch (err) {
    console.log(err.message);
  }
});

//remove expenses
app.delete("/expenses/:id",async(req,res) => {
  try {
    const { id } = req.params;
    const deleteexpenses = await pool.query("DELETE FROM expenses WHERE id = $1" [id]);
    res.json(deleteexpenses);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(9000,() => {
  console.log("server start port 9000");
});

