const dbConnection = require("../connection/db");
const router = require("express").Router();
// password hashing
const bcrypt = require("bcrypt");