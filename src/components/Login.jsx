import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [existingUser, setExistingUser] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errmsg, setErrmsg] = useState(null);

  const toggleSignForm = () => {
    setExistingUser(!existingUser);
  };

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const err = checkValidData(email.current.value, password.current.value);

    // console.log(err);
    setErrmsg(err);

    if (err) return;

    if (!existingUser) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage);
        });
    } else {
      // signIn Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage);
        });
    }
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
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          onClick={() => {
            setErrmsg("");
          }}
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700 rounded-lg"
          onClick={() => {
            setErrmsg("");
          }}
        />
        <p className="text-red-600">{errmsg}</p>
        <button
          className="bg-red-700 w-full m-2 p-2 rounded-lg"
          onClick={handleButtonClick}
        >
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
