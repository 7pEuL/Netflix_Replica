import React, { useState, useEffect, useRef } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import "./Row.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const timeoutId = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // const request = await axios.get(`http://localhost:2023/api/${fetchUrl}`);
      const request = await axios.get(`${fetchUrl}`);
<<<<<<< HEAD
      // console.table(request);
=======
      console.log(request);
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd

      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  // console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  const handleMouseEnter = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          timeoutId.current = setTimeout(() => {
            setTrailerUrl(urlParams.get("v"));
          }, 1000);
        })
        .catch((error) => {
          throw error;
        });
    }
  };

  // const [slideNumber, setSlideNumber] = useState(0);
  // const [leftSlide, setLeftSlide] = useState(false);
  // const [rightSlide, setRightSlide] = useState(false);

  // const handleSlide = (direction) => {
  //   if (direction === "left") {
  //     setLeftSlide(true);
  //   }

  //   if (direction === "right") {
  //     setRightSlide(true);
  //   }
  // };

  return (
    <div className="row mx-2">
      <h2 className=" row__title ms-3">{title}</h2>
      <div className="rowPosters auto__scroll row__wrapper">
        {movies?.map((movie) => (
<<<<<<< HEAD
          <React.Fragment key={movie.id}>
=======
          <>
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd
            {/* <span
              onClick={() => handleSlide("left")}
              className="row__wrapperLeft  row__sliderArrow"
            >
              <i className="bi bi-caret-left-fill"></i>
            </span> */}
            <img
<<<<<<< HEAD
=======
              key={movie.id}
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd
              onClick={() => handleMovie(movie)}
              // onMouseEnter={() => handleMouseEnter(movie)}
              onMouseLeave={() => handleMouseEnter(false)}
              className={`rowPoster mx-2 ${isLargeRow && "rowPosterLarge"}`}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            {/* <span
              onClick={() => handleSlide("right")}
              className="row__wrapperRight row__sliderArrow"
            >
              <i className="bi bi-caret-right-fill"></i>
            </span> */}
<<<<<<< HEAD
          </React.Fragment>
=======
          </>
>>>>>>> a714a31f1332f23d568d79f6fb3ac2566c4cf6dd
        ))}
      </div>

      <div className="">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
