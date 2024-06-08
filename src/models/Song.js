const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Song",
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            sections: {
                type: DataTypes.ARRAY(DataTypes.JSON),
                allowNull: true,
            },
        },
        { timestamps: false }
    );
};
