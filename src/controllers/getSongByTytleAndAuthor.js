const { Song } = require("../DB_connection");

const getSongByTytleAndAuthor = async (req, res) => {
    const { id } = req.params;
    try {
        const findById = await Song.findByPk(id);
        if (!findById) {
            return res.status(404).send(`Error al encontrar la canción`);
        }
        res.status(200).json(findById);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSongByTytleAndAuthor;
