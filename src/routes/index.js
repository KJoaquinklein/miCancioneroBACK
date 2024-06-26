// const getUserByName = require("../controllers/getUserByName");
// const createUser = require("../controllers/createUser");
// const login = require("../controllers/login");
const createSong = require("../controllers/createSong");
const getSongByTytleAndAuthor = require("../controllers/getSongByTytleAndAuthor");
const getSongByName = require("../controllers/getSongByName");
const getAllSongs = require("../controllers/getAllSong");
const deleteSong = require("../controllers/delete");
const getllSongFilters = require("../controllers/GetAllSongsFilters");
const getGeresAndAuthors = require("../controllers/getGeresAndAuthors");

const express = require("express");

const routerPath = express.Router();

// routerPath.post("/user", createUser);
// routerPath.get("/user", getUserByName);
// routerPath.get("/login", login);
routerPath.post("/song", createSong);
routerPath.get("/song/:id", getSongByTytleAndAuthor);
routerPath.get("/songname", getSongByName);
routerPath.get("/allsongs", getAllSongs);
routerPath.get("/filters", getllSongFilters);
routerPath.get("/genres_authors", getGeresAndAuthors);
routerPath.post("/delete/:id", deleteSong);

module.exports = routerPath;
