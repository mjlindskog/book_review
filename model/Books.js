const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Books extends Model {}

Books.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        book_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'review',
                key: 'id'
            }
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