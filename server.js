const express = require("express");
const path = require("path");
const app = express();
const sqlite3 = require("sqlite3");
const port = 8000;
// const dbPath = "/db.db";
// const db = new sqlite3.Database(dbPath);

app.use(express.static(path.join(__dirname, "WebApp-Competition")));
app.use(express.static(path.join(__dirname, "WebApp-Competition", "public")));
app.use(express.static(path.join(__dirname, "WebApp-Competition", "css")));
app.use(express.static(path.join(__dirname, "WebApp-Competition", "img")));
// app.use(express.static(path.join(__dirname, "/db.db")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "WebApp-Competition", "public", "loading.html")
  );
});

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "db.db"));
// });

// app.get("/WebApp-Competition/public/findPStn.html", (req, res) => {
//   db.all("SELECT * FROM db", (err, rows) => {
//     if (err) {
//       res.status(500).send(err.message);
//       console.log(err);
//     } else {
//       res.json(rows);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
