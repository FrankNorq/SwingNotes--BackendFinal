import { dbcreateUser, dbCheckEmail } from "../models/users.model.js";
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

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }
  try {
    const result = await dbCheckEmail(email.toLowerCase());
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "account not found." });
    }
    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ error: "Wrong e-mail or password, try again" });
    }
    const token = jwt.sign(
      {
        user_id: user.user_id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login Sucess!!", token });
  } catch (error) {
    console.error("something wrong with signin", error);
    res.status(500).json({ error: "No success loggin in" });
  }
};
