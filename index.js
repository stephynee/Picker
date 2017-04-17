const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');

const app = express();
const PORT = process.env.PORT || 8080;

const {getMovie} = require('./controllers.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/movie', getMovie);

app.get('*', (req, res) => {
  res.status(404).send('This page does not exist');
});

app.listen(PORT, () => console.log('Server running on port ', PORT));

module.exports = app;
