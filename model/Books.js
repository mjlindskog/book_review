const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Books extends Model {}

Books.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Books;