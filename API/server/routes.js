const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");
const API_KEY = process.env.api_key;
const base_url = "https://api.themoviedb.org/3";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const movies = (path) => {
  console.log(requests[path]);

  return axios
    .get(`${base_url}${requests[path]}`)
    .then((res) => {
      console.log(`i'm working`);

      return res.data;
    })
    .catch((error) => console.log(error));
};
router.get(`/api/:searchTerm`, async (req, res) => {
  try {
    console.log(req.params.searchTerm);
    res.json(await movies(req.params.searchTerm));
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
