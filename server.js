import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/account", (req, res) => {
  res.render("editProfile");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
