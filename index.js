const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { name: null });
});

app.post("/submit", (req, res) => {
  const userName = req.body.username;
  res.render("index", { name: userName });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
