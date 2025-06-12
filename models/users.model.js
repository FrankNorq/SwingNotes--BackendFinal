import pool from "../config/db.js";

export const dbcreateUser = async (email, name, hashedPassword) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (email, name, password_hash, createdat) VALUES ($1, $2, $3, NOW()) RETURNING *",
      [email, name, hashedPassword]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error inserting to DB:", error);
    throw error;
  }
};

export const dbCheckEmail = async (email) => {
  const result = await pool.query(
    `SELECT id AS user_id, email, password_hash AS password FROM users WHERE email = $1`,
    [email]
  );
  return result;
};
