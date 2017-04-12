const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const {getMovie} = require('./controllers.js');

app.get('/api/movie', getMovie);

app.listen(PORT, () => console.log('Server running on port ', PORT));

module.exports = app;
