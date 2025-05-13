const express = require('express');
const app = express();
const verifyToken = require('../middleware/auth')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authController = require('../controllers/authController');

//Route
app.post('/register', authController.register);
app.post('/login', authController.login);

module.exports = app;
