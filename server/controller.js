const fs = require("fs");
const jwt = require("jsonwebtoken");
const events = require("../db/events.json");

// The secret key should be an evironment variable in a live app
const JWT_SECRET = "jwt_secret_key";

const register = (req, res) => {
  if (req.body) {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // You'll want to encrypt the password in a live app
    };

    var data = JSON.stringify(user, null, 2);

    fs.writeFile("db/user.json", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Added user to user.json");
      }
    });

    const token = jwt.sign({ user }, JWT_SECRET);
    res.json({
      token,
      email: user.email,
      name: user.name,
    });
  } else {
    res.sendStatus(401);
  }
};

const login = (req, res) => {
  var userDB = fs.readFileSync("./db/user.json");
  var userInfo = JSON.parse(userDB);
  if (
    req.body &&
    req.body.email === userInfo.email &&
    req.body.password === userInfo.password
  ) {
    const token = jwt.sign({ userInfo }, JWT_SECRET);
    res.json({
      token,
      email: userInfo.email,
      name: userInfo.name,
    });
  } else {
    res.sendStatus(401);
  }
};

const dashboard = (req, res) => {
  res.json({ events });
};

module.exports = { register, login, dashboard };
