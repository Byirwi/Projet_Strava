const express = require('express');
const app = express();
const verifyToken = require('../middleware/auth')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const activityController = require('../controllers/activityController');

//Route
app.post('/activity', verifyToken, activityController.createActivity);
app.get('/activity', verifyToken, activityController.getAllActivity);
