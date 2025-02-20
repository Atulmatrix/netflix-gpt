import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </>
  );
};

export default GptSearch;
