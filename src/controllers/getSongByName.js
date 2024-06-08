const { Song } = require("../DB_connection");

const getSongByName = async (req, res) => {
    const { title } = req.query;
    try {
        const findeByName = await Song.findAll({
            where: {
                title: {
                    [Op.iLike]: `%${title}%`,
                },
            },
        });
        if (!findeByName.length) {
            return res.status(404).send(`No tiene una cancion creada con el nombre ${title}`);
        }
        res.status(200).json(findeByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getSongByName;
