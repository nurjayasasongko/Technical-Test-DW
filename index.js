const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const hbs = require("hbs");
const { partials } = require("handlebars");

// serving static files
app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
// // parsing
// app.use(express.urlencoded({ extended: false }))

// hbs setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/pricing", (req, res) => {
  res.render("index-copy");
});

app.listen(port, () => {
  console.log(`Example app listening at: ${port}`);
});
