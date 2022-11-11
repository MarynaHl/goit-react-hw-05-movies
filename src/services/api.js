import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'cdb4ad63923aa36135ea3e63ffafaaae';

const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

function fetchMoviesWithQuery(query) {
  const response = axios.get(
    `/search/movie?api_key=cdb4ad63923aa36135ea3e63ffafaaae&query=${query}`
  );
  return response;
}

const fetchMovieDetalis = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

const api = {
  fetchTrending,
  fetchMovieDetalis,
  fetchMoviesWithQuery,
  fetchActors,
  fetchReviews,
};

export default api;

fetchMoviesWithQuery.propTypes = {
  query: PropTypes.string.isRequired,
};