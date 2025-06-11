import pool from "../config/db.js";

export const dbGetNotes = async (userId) => {
  return await pool.query(
    `SELECT * FROM notes WHERE user_id = $1 ORDER BY createdAt DESC`,
    [userId]
  );
};

export const dbCreateNote = async (userId, title, text) => {
  return await pool.query(
    `INSERT INTO notes (user_id, title, text, createdAt, modifiedAt)
     VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *`,
    [userId, title, text]
  );
};

export const dbUpdateNote = async (userId, noteId, title, text) => {
  return await pool.query(
    `UPDATE notes
     SET title = $1, text = $2, modifiedAt = NOW()
     WHERE id = $3 AND user_id = $4
     RETURNING *`,
    [title, text, noteId, userId]
  );
};

export const dbDeleteNote = async (userId, noteId) => {
  return await pool.query(
    `DELETE FROM notes WHERE id = $1 AND user_id = $2 RETURNING *`,
    [noteId, userId]
  );
};
