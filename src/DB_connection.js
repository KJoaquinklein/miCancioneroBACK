const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const { DB_CONNECTION } = process.env;

const sequelize = new Sequelize(
    "PGPASSWORD=8kiECzlp2nfefVLRQCpds0c2CkmlF6Go psql -h dpg-cpd28rgl6cac73bdv17g-a.oregon-postgres.render.com -U micancionero_user micancionero",
    {
        logging: false,
        native: false,
    }
);
// const sequelize = new Sequelize("postgres://postgres:Samictwd15@localhost/micancionero", {
//     logging: false,
//     native: false,
// });

UserModel(sequelize);

const { User } = sequelize.models;

module.exports = {
    User,
    conn: sequelize,
};
