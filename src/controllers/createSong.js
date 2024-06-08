const { Song } = require("../DB_connection");

const createSong = async (req, res) => {
    try {
        const { title, author, genre, sections } = req.body;

        if (!title || !author || !genre || !sections) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const song = await Song.findOne({ where: { title: title, author: author } });
        if (song) {
            return res.status(400).json({ message: `La canción ${title} de ${author} ya existe` });
        }

        const createNewSong = await Song.create({
            title,
            author,
            genre,
            sections,
        });

        // const [song, created] = await Song.findOrCreate({
        //     where: { title: title, author: author },
        //     defaults: { genre: genre, sections: sections },
        // });

        // if (!created) {
        //     return res.status(400).json({ message: `La canción ${title} de ${author} ya existe` });
        // }

        //! cuando habia user
        // const response = await User.findOne({ where: { username: username } });

        // await response.update({ songs: [...response.songs, { title, author, genre, sections }] });

        // if (response.songs) {
        //     await response.update({ songs: [...response.songs, { title, author, genre, sections }] });
        // } else {
        //     await response.update({ songs: [{ title, author, genre, sections }] });
        // }

        return res.status(200).json({ message: "Canción creada exitosamente" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = createSong;
