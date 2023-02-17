import React from "react";

import Row from "./Row";
import requests from "../requests";

const Rows = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
};

export default Rows;
