import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { USER_AVATAR } from "../utils/constant";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
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
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = userCredential.user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrmsg(error.message);
            });
          console.log(user);
          // navigate("/browse");
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
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage);
        });
    }
  };

  // const handleButtonClick = async () => {
  //   const err = checkValidData(email.current.value, password.current.value);
  //   setErrmsg(err);
  //   if (err) return;

  //   if (!existingUser) {
  //     try {
  //       // ✅ Sign-Up User
  //       const userCredential = await createUserWithEmailAndPassword(
  //         auth,
  //         email.current.value,
  //         password.current.value
  //       );

  //       const user = userCredential.user;

  //       // ✅ Wait for profile update
  //       await updateProfile(user, {
  //         displayName: name.current.value,
  //         photoURL:
  //           "https://media.licdn.com/dms/image/v2/C4E03AQGK3F8MvQFEQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1621360162249?e=1744848000&v=beta&t=0SsCUYh7dVf-tdacSOmGRXMFnmozIeeE8lTq7Rx3MpU",
  //       });

  //       console.log("User Profile Updated:", user);

  //       dispatch(
  //         addUser({
  //           uid: user.uid,
  //           email: user.email,
  //           displayName: name.current.value,
  //           photoURL: user.photoURL, // Updated photoURL
  //         })
  //       );

  //       // ✅ Now navigate after profile is updated
  //       navigate("/browse");
  //     } catch (error) {
  //       setErrmsg(error.code + " - " + error.message);
  //     }
  //   } else {
  //     try {
  //       // ✅ Sign-In User
  //       const userCredential = await signInWithEmailAndPassword(
  //         auth,
  //         email.current.value,
  //         password.current.value
  //       );

  //       console.log("User Signed In:", userCredential.user);
  //       navigate("/browse");
  //     } catch (error) {
  //       setErrmsg(error.code + " - " + error.message);
  //     }
  //   }
  // };

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
