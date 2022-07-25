import axios from "axios";

// base url to make requests to the movies database
const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

// suppose if i do => instance.get('/ironman) it will be similar to =>  https://api.themoviedb.org/3/ironman

export default instance;
