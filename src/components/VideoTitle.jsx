import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className=" w-screen aspect-video pt-[20%] absolute px-24 text-white bg-gradient-to-r from-black -mt-10">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-4 text-lg w-1/3">{overview}</p>
        <button className="bg-white text-black p-2 px-10 text-xl hover:bg-opacity-80 rounded-lg">
          Play
        </button>
        <button className="bg-gray-500 text-white p-2 px-10 text-xl bg-opacity-50 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </>
  );
};

export default VideoTitle;
