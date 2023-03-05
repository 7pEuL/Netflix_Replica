import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Banner.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const opts = {
<<<<<<< HEAD
    height: "200vh",
=======
    height: "200",
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.overview ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
<<<<<<< HEAD
          // console.log(urlParams);
=======
          console.log(urlParams);
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
          backgroundPosition: "center",
        }}
      >
<<<<<<< HEAD
        <div className="YouTube">
=======
        <div className="">
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        <div className="bannerContents ms-5">
          <h1 className="bannerTitle">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="bannerButtons">
            <button
              type="button"
              onClick={() => handleClick(movie)}
              onDoubleClick={() => handleClick(false)}
              className="btn btn-outline-dark btn-light fw-bold mx-2 bannerButton"
            >
              <i className="bi bi-play-fill"></i> Play
            </button>

            <button
              type="button"
              className="btn btn-outline-info btn-dark fw-bold bannerButton info"
            >
              <i className="bi bi-info-circle"></i> More Info
            </button>
          </div>

          <h1 className="bannerDescription mb-5">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="bannerFadeBottom" />
      </header>
    </>
  );
};

export default Banner;
