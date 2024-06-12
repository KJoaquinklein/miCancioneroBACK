const { Song } = require("../DB_connection");

const getllSongFilters = async (req, res) => {
    const { author, genre, order } = req.query;
    try {
        let all = await Song.findAll();
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

module.exports = getllSongFilters;
