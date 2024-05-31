const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "User",
        {
            // id: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            //     primaryKey: true,
            // },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            songs: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: false,
            },
        },
        { timestamps: false }
    );
};
