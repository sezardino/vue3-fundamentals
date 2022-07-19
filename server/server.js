const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { verifyToken } = require("./middleware");
const { register, login, dashboard } = require("./controller");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API." });
});

app.get("/dashboard", verifyToken, dashboard);

app.post("/register", register);

app.post("/login", login);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
