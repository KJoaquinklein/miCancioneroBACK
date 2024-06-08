const { User } = require("../DB_connection");

const getUserByName = async (req, res) => {
    try {
        const { username } = req.query;

        const response = await User.findOne({ where: { username: username } });

        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = getUserByName;
