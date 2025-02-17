import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayMovies = useSelector((store) => store.movies.nowPlayingMovies);
  const PopularMovies = useSelector((store) => store.movies.popularMovies);
  const TopRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const UpComingMovies = useSelector((store) => store.movies.upComingMovies);

  return (
    nowPlayMovies && (
      <div className=" bg-black">
        <div className="-mt-48 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayMovies} />
          <MovieList title={"Trending"} movies={PopularMovies} />
          <MovieList title={"Trending"} movies={TopRatedMovies} />
          <MovieList title={"Trending"} movies={UpComingMovies} />
        </div>

        {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} /> */}
      </div>
    )
  );
};

export default SecondaryContainer;
