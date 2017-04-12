const app = require('../index.js');
const assert = require('assert');
const request = require('supertest');

function makeRequest(url, done) {
  request(app)
    .get(url)
    .then(res => {
      assert(res.body.hasOwnProperty('title'));
      done();
    });
}

describe('/api/movie route', () => {
  it('returns movie data when all categories are filled out', done => {
    makeRequest('/api/movie?genre=Comedy&year1=2010-01-01&year2=2016-01-01&rating=7.0', done);
  });

  it('returns movie data when some categories are filled out', done => {
    makeRequest('/api/movie?genre=Comedy&rating=7.0', done);
  });

  it('returns movie data when no categories are filled out', done => {
    makeRequest('/api/movie', done);
  });
});
