const { Song } = require("../DB_connection");

const getAllSongs = async (req, res) => {
    try {
        const findAll = await Song.findAll();
        res.status(200).json(findAll);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllSongs;
