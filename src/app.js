/* Importation des modules nécessaires */

var express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app);
require('dotenv').config();

/* Configuration du serveur */

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Le serveur est actuellement demarée sur le prot ${PORT}`);
});

module.exports = {
    app
};