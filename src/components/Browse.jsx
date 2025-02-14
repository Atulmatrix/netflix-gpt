import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constant";

const Browse = () => {
  const getNowplayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const JSON = await data.json();
    // console.log(JSON);
    console.log(JSON.results);
  };

  useEffect(() => {
    getNowplayingMovies();
  }, []);

  return (
    <>
      <Header />
    </>
  );
};

export default Browse;
