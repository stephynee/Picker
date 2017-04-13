const axios = require('axios');

const {tmdbAPIKey} = require('./config');
const {formatGenre} = require('./helpers');

module.exports = {
  getMovie: (req, res) => {
    let movieDetails = {};
    let {year1, year2, rating, genre} = req.query;
    let baseRating = rating || '&vote_average.gte=4.0';
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbAPIKey}&vote_count.gte=20${baseRating}`;

    if(genre) {
      url += `&with_genres=${formatGenre(genre)}`;
    }

    if(year1 && year2) {
      url += `&primary_release_date.gte=${year1}&primary_release_date.lte=${year2}`;
    }

    axios.get(url)
      .then(response => {
        const pageNumber = Math.floor((Math.random() * response.data.total_pages) + 1);
        url += url += `&page=${pageNumber}`;

        return axios.get(url);
      })
      .then(response => {
        const movieIndex = Math.floor(Math.random() * response.data.results.length);
        const movie = response.data.results[movieIndex];

        movieDetails.tmdbRating = movie.vote_average;
        movieDetails.imagePath = movie.poster_path;

        return axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${tmdbAPIKey}`);
      })
      .then(response => axios.get(`http://www.omdbapi.com/?i=${response.data.imdb_id}&plot=full`))
      .then(response => {
        const {Title, Year, Runtime, Genre, Actors, Plot, Language, Country, imdbRating, imdbID} = response.data;

        const movie = Object.assign(movieDetails, {
          title: Title,
          year: Year,
          runtime: Runtime,
          genre: Genre,
          actors: Actors,
          plot: Plot,
          language: Language,
          country: Country,
          imdbRating,
          imdbID
        });

        res.send(movie);
      })
      .catch(err => {
        res.send(err);
      });
  }
};
