const getUserByName = require("../controllers/getUserByName");
const createUser = require("../controllers/createUser");
const login = require("../controllers/login");
const createSong = require("../controllers/createSong");

const express = require("express");

const routerPath = express.Router();

routerPath.post("/user", createUser);
routerPath.get("/user", getUserByName);
routerPath.get("/login", login);
routerPath.post("/song", createSong);

module.exports = routerPath;
