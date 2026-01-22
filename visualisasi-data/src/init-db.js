const db = require("./db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,

      age INTEGER,

      education_level TEXT CHECK (education_level IN ('school', 'college')),

      study_hours_per_day REAL,

      uses_ai TEXT CHECK (uses_ai IN ('Yes', 'No')),

      ai_tools_used TEXT,

      purpose_of_ai TEXT,

      grades_before_ai INTEGER,

      grades_after_ai INTEGER,

      daily_screen_time_hours REAL
    )
  `);

  console.log("Table created");
});
