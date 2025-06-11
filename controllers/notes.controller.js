import {
  dbGetNotes,
  dbCreateNote,
  dbUpdateNote,
  dbDeleteNote,
} from "../models/notes.model.js";

const tempUserId = 3; // Byt till `req.user.user_id` när JWT är på plats

export const getNotes = async (req, res) => {
  try {
    const result = await dbGetNotes(tempUserId);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Could not fetch notes" });
  }
};

export const createNote = async (req, res) => {
  const { title, text } = req.body;

  if (!title || !text) {
    return res.status(400).json({ error: "Title and text are required" });
  }

  try {
    const result = await dbCreateNote(tempUserId, title, text);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Could not create note" });
  }
};

export const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, text } = req.body;

  try {
    const result = await dbUpdateNote(tempUserId, noteId, title, text);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Note not found or not yours" });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Could not update note" });
  }
};

export const deleteNote = async (req, res) => {
  const noteId = req.params.id;

  try {
    const result = await dbDeleteNote(tempUserId, noteId);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Note not found or not yours" });
    }
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: "Could not delete note" });
  }
};
