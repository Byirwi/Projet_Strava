const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const activity = sequelize.define('activities', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  path: {
    type: DataTypes.JSON,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // nom de la table de référence
      key: 'id'
    }
  }
}, {
  tableName: 'activities',
  timestamps: false // à activer si tu as createdAt / updatedAt
});

module.exports = activity;

