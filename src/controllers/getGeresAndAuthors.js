const { Song } = require("../DB_connection");

const getGeresAndAuthors = async (req, res) => {
    try {
        const songs = await Song.findAll();
        const genres = [];
        songs.map((song) => {
            genres.push(song.genre);
        });
        const authors = [];
        songs.map((song) => {
            authors.push(song.author);
        });
        res.status(200).json({ genres, authors });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getGeresAndAuthors;
