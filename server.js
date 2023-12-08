const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, "WebApp-Competition")));
app.use(express.static(path.join(__dirname, "WebApp-Competition", "public")));
app.use(express.static(path.join(__dirname, "WebApp-Competition", "css")));
app.use(express.static(path.join(__dirname, "WebApp-Competition", "img")));

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "WebApp-Competition", "public", "mainPage.html")
  );
});

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
