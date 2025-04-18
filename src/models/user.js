// models/User.js

const [DataTypes] = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false  // desactiver les timestamps automatiques et updatedAt
});

module.exports = User;
// models/User.js
