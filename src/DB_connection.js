const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const { DB_CONNECTION } = process.env;

const sequelize = new Sequelize(DB_CONNECTION, {
    logging: false,
    native: false,
});
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
