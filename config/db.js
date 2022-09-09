const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "amen",
  database: "safran_project",
  host: "localhost",
  port: 5432,
});

pool.connect();

module.exports = pool;
