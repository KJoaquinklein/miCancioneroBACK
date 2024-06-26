const { User } = require("../DB_connection");

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Faltan datos" });
        }

        const [user, created] = await User.findOrCreate({
            where: { username },
            defaults: { password },
        });

        if (!created) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        return res.status(201).send("Usuario creado");
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = createUser;
