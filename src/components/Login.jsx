import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Login() {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleSign = () => {
    setIsSigninForm(!isSigninForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("STARTING!!!");
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSigninForm) {
      // Sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.warn("Status:" + errorCode);
        });
    } else {
      // Sign in logic here
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
          setErrorMessage(errorMessage);
          console.warn("Status:" + errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/GE-en-20241118-TRIFECTA-perspective_bc767956-f12f-486f-8f83-f5b493d961cc_medium.jpg"
          alt="bg"
          objectFit="cover"
        />
      </div>
      <div className="absolute w-full h-screen top-0 flex justify-center items-center">
        <form className="bg-black rounded-lg w-96 text-white flex flex-col items-center justify-center p-8 gap-4 opacity-90 ">
          <h1 className="text-3xl font-bold">
            {isSigninForm ? "Sign in" : "Sign Up"}
          </h1>
          {!isSigninForm ? (
            <input
              className="p-3 bg-transparent border border-gray-500 rounded-md w-full"
              type="text"
              placeholder="Name"
            />
          ) : null}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-3 bg-transparent border border-gray-500 rounded-md w-full"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 bg-transparent border border-gray-500 rounded-md w-full"
          />
          <p className="text-red-600">{errorMessage}</p>
          <button
            className="p-4  bg-red rounded-md bg-red-600 w-full"
            onClick={handleButtonClick}
          >
            {isSigninForm ? "Sign in" : "Sign Up"}
          </button>

          <Link>
            {isSigninForm ? (
              <div className="flex gap-2 " onClick={toggleSign}>
                <p className="opacity-70">New to Netflix? </p>
                <p className="font-bold">Sign up</p>{" "}
              </div>
            ) : (
              <div className="flex gap-2 " onClick={toggleSign}>
                <p className="opacity-70">Already registered? </p>
                <p className="font-bold">Sign in</p>{" "}
              </div>
            )}
          </Link>
        </form>
      </div>
    </div>
  );
}
