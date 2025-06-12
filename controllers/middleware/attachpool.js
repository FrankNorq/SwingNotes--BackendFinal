import pool from "../../config/db.js";

const attachPool = (req, res, next) => {
  req.pool = pool;
  next();
};

export default attachPool;
