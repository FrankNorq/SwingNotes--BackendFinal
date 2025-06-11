import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";
import express from "express";
const router = express.Router();
router.get("/", getNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
// router.get("/search", );

export default router;
