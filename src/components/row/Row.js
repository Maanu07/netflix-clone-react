import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/w500/"; //base url for image in tmdb

function Row({ title, fetchURL, isLargeRow }) {
  // Row components states
  const [movies, setMovies] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");

  // This is a React hook
  useEffect(() => {
    // this is how you use a async function inside a useEffect hook, this async function is used to fetch the movies when the Row component is loaded
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  /*  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }; */

  /*  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("not found"));
    }
  }; */

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) => (
          <img
            // onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} // the row  having isLargeRow prop must display poster image while other rows must display thumbnail image
            alt={movie.original_title}
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} // the row having isLargeRow prop must have image with more height
          ></img>
        ))}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
