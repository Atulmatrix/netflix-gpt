import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
      <Header />
      {/* MainContainer
     -VideoBackGround
     -VideoTitle
    SecondaryContainer
     -MovieList*n
      -cards*n */}
    </>
  );
};

export default Browse;
