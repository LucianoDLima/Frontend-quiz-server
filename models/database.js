require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_KEY}@${process.env.DB_URL}/${process.env.DB_USER}`,
});

module.exports = { pool };
