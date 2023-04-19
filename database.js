import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "walks",
});

export const queryDatabase = async (q, vals = []) => {
  const connection = await pool.getConnection();
  try {
    const [rows, fields] = await connection.query(q, vals);
    return {
      success: 1,
      data: rows,
    };
  } catch (err) {
    return {
      success: 0,
      error: err,
    };
  } finally {
    connection.release();
  }
};
