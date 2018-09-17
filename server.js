const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const months = require('./routes/api/months');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err));

app.use('/api/months', months);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));