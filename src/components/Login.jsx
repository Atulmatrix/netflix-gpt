import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [existingUser, setExistingUser] = useState(true);

  const toggleSignForm = () => {
    setExistingUser(!existingUser);
  };

  return (
    <>
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[440px] absolute top-[97px] left-96 p-12 bg-black text-white bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold py-4 text-[22px]">
          {existingUser ? "SignIn" : "Sign Up"}
        </h1>
        {!existingUser && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="bg-red-700 w-full m-2 p-2 rounded-lg">
          {existingUser ? "SignIn" : "SignUp"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignForm}>
          {existingUser
            ? "New to Netflix? SignUp Now"
            : "Alredy existing User Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
