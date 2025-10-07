const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Serve static files dari direktori saat ini
app.use(express.static(path.join(__dirname)));

// Membuka koneksi ke database SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Gagal membuka database:', err.message);
  } else {
    console.log('Terhubung ke database SQLite.');
  }
});

// Membuat tabel pengguna jika belum ada dan sisipkan data contoh
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS pengguna (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nama TEXT,
    umur INTEGER,
    kota TEXT
  )`);

  // Cek apakah tabel kosong, jika ya, sisipkan data contoh
  db.get('SELECT COUNT(*) as count FROM pengguna', [], (err, row) => {
    if (err) {
      console.error('Error saat cek data:', err.message);
    } else if (row.count === 0) {
      const insert = db.prepare('INSERT INTO pengguna (nama, umur, kota) VALUES (?, ?, ?)');
      insert.run('Ahmad', 25, 'Jakarta');
      insert.run('Siti', 30, 'Bandung');
      insert.run('Budi', 28, 'Surabaya');
      insert.run('Rina', 22, 'Yogyakarta');
      insert.finalize();
      console.log('Data contoh telah disisipkan.');
    }
  });
});

// Endpoint API untuk mendapatkan data pengguna
app.get('/api/pengguna', (req, res) => {
  db.all('SELECT * FROM pengguna', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get('/api/dashboard', (req, res) => {
  console.log('API /api/dashboard dipanggil');
  const dashboardData = {};

  db.get('SELECT COUNT(*) AS totalUsers FROM pengguna', [], (err, row) => {
    if (err) {
      console.error('Error query totalUsers:', err.message);
      return res.status(500).json({ error: err.message });
    }
    dashboardData.totalUsers = row.totalUsers;

    db.get('SELECT AVG(umur) AS averageAge FROM pengguna', [], (err, row) => {
      if (err) {
        console.error('Error query averageAge:', err.message);
        return res.status(500).json({ error: err.message });
      }
      dashboardData.averageAge = row.averageAge ? parseFloat(row.averageAge).toFixed(2) : 0;

      db.all('SELECT kota, COUNT(*) AS count FROM pengguna GROUP BY kota', [], (err, rows) => {
        if (err) {
          console.error('Error query usersPerCity:', err.message);
          return res.status(500).json({ error: err.message });
        }
        dashboardData.usersPerCity = rows;
        console.log('Mengirim data dashboard:', dashboardData);
        res.json(dashboardData);
      });
    });
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

// Menutup database saat aplikasi berhenti
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error saat menutup database:', err.message);
    } else {
      console.log('Koneksi database ditutup.');
    }
    process.exit(0);
  });
});
