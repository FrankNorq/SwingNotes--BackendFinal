import express from "express";
import { createUser } from "../controllers/users.controller.js";
const router = express.Router();
router.post("/signup", createUser);
router.post("/login", (req, res) => {});
export default router;
