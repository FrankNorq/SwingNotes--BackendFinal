import express from "express";
import dotenv from "dotenv";
import usersRoute from "./router/users.js";
import notesRoute from "./router/notes.js";
const app = express();
app.use(express.json());
app.use("/api/notes", notesRoute);
app.use("/api/users", usersRoute);
export default app;
