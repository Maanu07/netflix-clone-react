// my api key for TMDB
const API_KEY = "3cf311f3657f655a386cc6563171a1e2";

// creating a requests object which i will be exporting from this file
const requests = {
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
