const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

// Data mentah
app.get("/api/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// Ringkasan semua data
app.get("/api/summary", (req, res) => {
  db.all(
    `
    SELECT uses_ai,
           COUNT(*) AS total_students,
           AVG(grades_after_ai - grades_before_ai) AS avg_improvement
    FROM students
    GROUP BY uses_ai
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

// Jumlah siswa berdasarkan tingkat pendidikan
app.get("/api/summary/education-level", (req, res) => {
  db.all(
    `
    SELECT education_level, COUNT(*) AS total
    FROM students
    GROUP BY education_level
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

// Total pelajar berdasarkan ai yang digunakan
app.get("/api/summary/ai-tools", (req, res) => {
  db.all(
    `
    SELECT ai_tools_used, COUNT(*) AS total
    FROM students
    GROUP BY ai_tools_used
    ORDER BY total DESC
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

// Rata-rata screen time
app.get("/api/summary/screen-time", (req, res) => {
  db.all(
    `
    SELECT uses_ai,
           AVG(daily_screen_time_hours) AS avg_screen_time
    FROM students
    GROUP BY uses_ai
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

// Rata-rata nilai berdasarkan penggunaan AI
app.get("/api/summary/grades", (req, res) => {
  db.all(
    `
    SELECT uses_ai,
           AVG(grades_before_ai) AS avg_before,
           AVG(grades_after_ai) AS avg_after
    FROM students
    GROUP BY uses_ai
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

// Total pelajar berdasarkan penggunaan  AI
app.get("/api/summary/ai-usage", (req, res) => {
  db.all(
    `
    SELECT uses_ai, COUNT(*) as total
    FROM students
    GROUP BY uses_ai
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

// Semua data berdasarkan jam belajar
app.get("/api/summary/study-hours", (req, res) => {
  db.all(
    `
    SELECT study_hours_per_day, grades_after_ai
    FROM students
    WHERE uses_ai = 'Yes'
  `,
    (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    },
  );
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
