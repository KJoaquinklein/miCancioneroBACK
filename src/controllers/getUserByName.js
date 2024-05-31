const { User } = require("../DB_connection");

const getUserByName = async (req, res) => {
    const { username } = req.query;

    const response = await User.findOne({ where: { username: username } });

    res.status(200).json(response);
};

module.exports = getUserByName;
