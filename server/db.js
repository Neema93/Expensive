const Pool = require('pg').Pool;

const pool = new Pool({
  user: "heeya",
  password: "heeya",
  host: "localhost",
  port: 5432,
  database: "expensify"

});
module.exports = pool;