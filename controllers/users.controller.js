import { dbcreateUser } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  const { email, name, password } = req.body;
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const account = await dbcreateUser(email, name, hashedPassword);
    res.status(201).json({
      message: "account created",
      email: account.email,
      name: account.name,
    });
  } catch (error) {
    console.error("error creating user:", error);
    res.status(500).json({ error: "internal server error" });
  }
};
