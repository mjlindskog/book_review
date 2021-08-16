const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Reviews extends Model {}

Reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        review_content: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // book_title: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // author: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        book_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Reviews;