const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Hackathonproject', { useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/HackathonRoutes');
routes(app);

const hostname = '127.0.0.1';
const port = 3600;

app.listen(port, hostname);
