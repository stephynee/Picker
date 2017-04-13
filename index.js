const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

const {getMovie} = require('./controllers.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/api/movie', getMovie);

app.listen(PORT, () => console.log('Server running on port ', PORT));

module.exports = app;
