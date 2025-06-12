import pool from "./db.js";

const createTables = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(100) NOT NULL UNIQUE,
      name VARCHAR(100) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      createdAt TIMESTAMP NOT NULL
    );

    CREATE TABLE IF NOT EXISTS notes (
      id SERIAL PRIMARY KEY,
      title VARCHAR(50) NOT NULL,
      text VARCHAR(300) NOT NULL,
      createdAt TIMESTAMP NOT NULL,
      modifiedAt TIMESTAMP NOT NULL,
      user_id INTEGER NOT NULL,
      CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log(" Tabeller skapades (eller fanns redan)");
  } catch (error) {
    console.error(" Fel vid tabellskapande:", error);
  }
};

export default createTables;
