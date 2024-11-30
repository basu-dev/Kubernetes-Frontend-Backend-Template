const { Pool } = require('pg');
require('dotenv').config();

console.table(process.env);

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

// SQL to initialize the users table
const initUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Function to initialize the database
const initializeDatabase = async () => {
  const client = await pool.connect();
  try {
    console.log('Initializing database...');
    // Execute the table creation query
    await client.query(initUsersTableQuery);
    console.log('Users table initialized successfully!');
  } catch (err) {
    console.error('Error initializing database:', err.message);
  } finally {
    client.release(); // Release the client back to the pool
  }
};

module.exports = {
  pool,
  initializeDatabase 
};

