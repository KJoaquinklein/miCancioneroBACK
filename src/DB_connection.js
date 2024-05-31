const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");

const sequelize = new Sequelize("postgres://postgres:Samictwd15@localhost/micancionero", {
    logging: false,
    native: false,
});

UserModel(sequelize);

const { User } = sequelize.models;

module.exports = {
    User,
    conn: sequelize,
};
