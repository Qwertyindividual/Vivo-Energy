require("dotenv").config();
const mysql = require("mysql")

var con = mysql.createPool({
  host: process.env.Host,
  database: process.env.Name,
  user: process.env.User,
  password: process.env.Pwd,
  port: process.env.dbPort,
  multipleStatements: true
});

module.exports = con;