import "./App.css";
import React from "react";
import requests from "./requests";

// *************** importing my components ***********
import Row from "./components/row/Row";
import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchPopularMovies}
        isLargeRow={true}
      />
      <Row title='Trending Now' fetchURL={requests.fetchTrending} />
      <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Row title='Upcoming Movies' fetchURL={requests.fetchUpcoming} />
      <Row title='Tv Shows' fetchURL={requests.fetchTvShow} />
      <Row title='Action Movies' fetchURL={requests.fetchTrending} />
    </div>
  );
}

export default App;
