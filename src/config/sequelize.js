/* Configuration de sequelize */

const { Sequelize } = require('sequelize');

// Création de l'instance de sequelyze

const sequelize = new sequelize (
    'strava',
    'Strava_account',
    'kGbCdhuXLVFR*aiGucRNt!6igA64ivWu7-3J8tqvuWBkmeoG!-',
    {
        host: 'localhost',
        dialect: 'mysql',
    }

);

// Exportation de l'instance de sequelize
module.exports = sequelize;