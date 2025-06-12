import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  searchNotes,
} from "../controllers/notes.controller.js";
import verifyJWT from "../controllers/middleware/verifyJWT.js";
import express from "express";
const router = express.Router();
router.use(verifyJWT);
router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/search", searchNotes);

export default router;
