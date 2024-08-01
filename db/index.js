const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "rootroot",
  host: "localhost",
  database: "movie_db",
  port: 5432,
});

pool.connect();
