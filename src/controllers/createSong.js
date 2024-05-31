const { User } = require("../DB_connection");

const createSong = async (req, res) => {
    try {
        const { username, title, author, type, sections } = req.body;

        if (!title || !author || !type || !sections) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const response = await User.findOne({ where: { username: username } });

        await response.update({ songs: [...response.songs, { title, author, type, sections }] });
        return res.status(200).json({ message: "Canción creada exitosamente" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = createSong;
