const fs = require("fs");
const csv = require("csv-parser");
const db = require("./db");

fs.createReadStream("data/students_ai_usage.csv")
  .pipe(csv())
  .on("data", (row) => {
    db.run(
      `
      INSERT INTO students (
        age,
        education_level,
        study_hours_per_day,
        uses_ai,
        ai_tools_used,
        purpose_of_ai,
        grades_before_ai,
        grades_after_ai,
        daily_screen_time_hours
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        row.age,
        row.education_level,
        row.study_hours_per_day,
        row.uses_ai,
        row.ai_tools_used,
        row.purpose_of_ai,
        row.grades_before_ai,
        row.grades_after_ai,
        row.daily_screen_time_hours,
      ],
    );
  })
  .on("end", () => {
    console.log("CSV successfully imported");
  });
