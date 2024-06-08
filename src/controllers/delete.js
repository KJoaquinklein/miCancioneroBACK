const { Song } = require("../DB_connection");

const deleteSong = async (req, res) => {
    const { id } = req.params;
    try {
        const findById = await Song.findByPk(id);
        await findById.destroy();
        res.status(200).json({ message: `Se elimino la canción ${findById.title}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteSong;
