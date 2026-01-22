const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database/students.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error("DB Error:", err.message);
  else console.log("Connected to SQLite");
});

module.exports = db;
