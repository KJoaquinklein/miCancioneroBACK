// const getUserByName = require("../controllers/getUserByName");
// const createUser = require("../controllers/createUser");
// const login = require("../controllers/login");
// const createSong = require("../controllers/createSong");
// const getSongByTytleAndAuthor = require("../controllers/getSongByTytleAndAuthor");
// const getSongByName = require("../controllers/getSongByName");
// const getAllSongs = require("../controllers/getAllSong");
// const deleteSong = require("../controllers/delete");
// const getllSongFilters = require("../controllers/GetAllSongsFilters");
// const getGeresAndAuthors = require("../controllers/getGeresAndAuthors");

const express = require("express");

const routerPath = express.Router();

// routerPath.post("/user", createUser);
// routerPath.get("/user", getUserByName);
// routerPath.get("/login", login);

let songs = [
    // {
    //     title: "Zamba Para Olvidar",
    //     author: "Daniel Toro",
    //     genre: "Zamba",
    //     sections: [
    //         {
    //             type: "Estrofa",
    //             verses: [
    //                 "No sé para qué volviste",
    //                 "Si ya empezaba a olvidar",
    //                 "No sé si ya lo sabrás",
    //                 "Lloré cuando vos te fuiste",
    //                 "No sé para qué volviste",
    //                 "Qué mal me hace recordar",
    //             ],
    //         },
    //         {
    //             type: "Estrofa",
    //             verses: [
    //                 "La tarde se ha puesto tristee",
    //                 "Y yo prefiero callar",
    //                 "¿Para qué vamos a hablar",
    //                 "De cosas que ya no existen?",
    //                 "No sé para qué volviste",
    //                 "Ya ves, es mejor no hablar",
    //             ],
    //         },
    //         {
    //             type: "Estribillo",
    //             verses: [
    //                 "Qué pena me da saber que al final",
    //                 "De este amor ya no queda nada",
    //                 "Solo una pobre canción",
    //                 "Da vueltas por mi guitarra",
    //                 "Y hace rato que te extraña",
    //                 "Mi zamba para olvidar",
    //             ],
    //         },
    //         {
    //             type: "Estrofa",
    //             verses: [
    //                 "Mi zamba vivió conmigo",
    //                 "Parte de mi soledad",
    //                 "No sé si ya lo sabrás",
    //                 "Mi vida se fue contigo",
    //                 "Contigo, mi amor, contigo",
    //                 "Qué mal me hace recordar",
    //             ],
    //         },
    //         {
    //             type: "Estrofa",
    //             verses: [
    //                 "Mis manos ya son de barro",
    //                 "Tanto apretar al dolor",
    //                 "Y ahora que me falta el sol",
    //                 "No sé qué venís buscando",
    //                 "Llorando, mi amor, llorando",
    //                 "También olvidame vos",
    //             ],
    //         },
    //         {
    //             type: "Estribillo",
    //             verses: [
    //                 "Qué pena me da saber que al final",
    //                 "De este amor ya no queda nada",
    //                 "Solo una pobre canción",
    //                 "Da vueltas por mi guitarra",
    //                 "Y hace rato que te extraña",
    //                 "Mi zamba para olvidar",
    //             ],
    //         },
    //     ],
    // },
];

const createSong = (req, res) => {
    try {
        const { title, author, genre, sections } = req.body;

        if (!title || !author || !genre || !sections) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const song = songs.find((song) => song.title === title && song.author === author);
        if (song) {
            return res.status(400).json({ message: `La canción ${title} de ${author} ya existe` });
        }

        songs.push({ id: songs.length + 1, title, author, genre, sections });

        return res.status(200).json({ message: "Canción creada exitosamente" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getSongByTytleAndAuthor = (req, res) => {
    const { id } = req.params;
    try {
        // const findById = songs.filter((song) => song.id !== id);
        const find = [];
        songs.map((song) => {
            console.log(song.id);
            console.log(id);
            if (song.id == id) {
                find.push(song);
            }
        });
        if (!find.length) {
            return res.status(404).send(`Error al encontrar la canción`);
        }
        res.status(200).json(find);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSongByName = (req, res) => {
    const { title } = req.query;
    try {
        const find = [];
        songs.map((song) => {
            const songUp = song.title.toLowerCase();
            const titleUp = title.toLowerCase();
            if (songUp.includes(titleUp)) {
                find.push(song);
            }
        });

        if (!find.length) {
            return res.status(404).send(`No tiene una cancion creada con el nombre ${title}`);
        }
        res.status(200).json(find);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllSongs = (req, res) => {
    try {
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getllSongFilters = (req, res) => {
    const { author, genre, order } = req.query;
    try {
        let all = [...songs];
        if (author) {
            all = all.filter((song) => song.author === author);
        }
        if (genre) {
            all = all.filter((song) => song.genre === genre);
        }
        if (order) {
            if (order === "ascendente") {
                all = [...all].sort((a, b) => {
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                    return 0;
                });
            }
            if (order === "descendente") {
                all = [...all].sort((a, b) => {
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (a.title < b.title) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        res.status(200).json(all);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGeresAndAuthors = async (req, res) => {
    try {
        const songsCopy = [...songs];
        const genres = [];
        songsCopy.map((song) => {
            genres.push(song.genre);
        });
        const authors = [];
        songsCopy.map((song) => {
            authors.push(song.author);
        });
        res.status(200).json({ genres, authors });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteSong = (req, res) => {
    const { id } = req.params;
    try {
        const idParam = Number(id);

        const findById = songs.find((song) => song.id === idParam);
        console.log(findById);
        songs = songs.filter((song) => song.id !== idParam);
        res.status(200).json({ message: `Se elimino la canción ${findById.title}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

routerPath.post("/song", createSong);
routerPath.get("/song/:id", getSongByTytleAndAuthor);
routerPath.get("/songname", getSongByName);
routerPath.get("/allsongs", getAllSongs);
routerPath.get("/filters", getllSongFilters);
routerPath.get("/genres_authors", getGeresAndAuthors);
routerPath.post("/delete/:id", deleteSong);

module.exports = routerPath;
