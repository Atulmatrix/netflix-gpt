import React from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const JSON = await data.json();
    // console.log(JSON);
    console.log(JSON.results);
    dispatch(addNowPlayingMovies(JSON.results));
  };

  useEffect(() => {
    getNowplayingMovies();
  }, []);
};

export default useNowPlayingMovies;
