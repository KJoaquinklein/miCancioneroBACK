const { User } = require("../DB_connection");

const login = async (req, res) => {
    const { username, password } = req.query;

    if (!username || !password) {
        if (!username && !password) {
            return res.status(400).json({ message: "Ingresa tu nombre de usuario y tu contraseña para ingresar" });
        }
        if (!username && password) {
            return res.status(400).json({ message: "Ingresa tu nombre de usuario para ingresar" });
        }
        if (username && !password) {
            return res.status(400).json({ message: "Ingresa tu contraseña para ingresar" });
        }
    }

    try {
        const userFind = await User.findOne({
            where: { username },
        });

        if (!userFind) {
            return res.status(404).json({ message: "No existe un usuario con ese nombre" });
        }

        const validacion = userFind.password === password;

        if (!validacion) {
            return res.status(403).json({ message: "Contraseña incorrecta" });
        }

        res.status(200).json({ access: validacion });
    } catch (err) {
        res.status(500).json({ error: "Algo salio mal :(" });
    }
};

module.exports = login;
