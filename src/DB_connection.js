const { Sequelize } = require("sequelize");
const SongModel = require("./models/Song");
const { DB_CONNECTION } = process.env;

const sequelize = new Sequelize(
    "micancionero", // Nombre de la base de datos
    "micancionero_user", // Usuario
    "8kiECzlp2nfefVLRQCpds0c2CkmlF6Go", // Contraseña
    {
        host: "postgres://micancionero_user:8kiECzlp2nfefVLRQCpds0c2CkmlF6Go@dpg-cpd28rgl6cac73bdv17g-a.oregon-postgres.render.com/micancionero",
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
        logging: false,
        native: false,
    }
);

// const sequelize = new Sequelize(
//     "PGPASSWORD=8kiECzlp2nfefVLRQCpds0c2CkmlF6Go psql -h dpg-cpd28rgl6cac73bdv17g-a.oregon-postgres.render.com -U micancionero_user micancionero",
//     {
//         logging: false,
//         native: false,
//     }
// );
// const sequelize = new Sequelize(
//     "postgres://micancionero_user:8kiECzlp2nfefVLRQCpds0c2CkmlF6Go@dpg-cpd28rgl6cac73bdv17g-a/micancionero",
//     {
//         logging: false,
//         native: false,
//     }
// );

SongModel(sequelize);

const { Song } = sequelize.models;

module.exports = {
    Song,
    conn: sequelize,
};
