const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserPassword) {
                newUserPassword.password = await bcrypt.hash(newUserPassword.password, 10);
                return newUserPassword;
            },
            async beforeUpdate(updateUserPassword) {
                updateUserPassword.password = await bcrypt.hash(updateUserPassword.password, 10);
                return updateUserPassword;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        uderscored: true,
        modelName: 'user'
    }
    // {
    //     sequelize,
    //     timestamps: false,
    //     freezeTableName: true,
    //     uderscored: true,
    //     modelName: 'user'
    // }
)

module.exports = User;
