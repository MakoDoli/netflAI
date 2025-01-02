import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";

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

    const message = checkValidData(email.current.value, password.current.value);

    if (message === true)
      console.log(email.current.value, password.current.value);
    setErrorMessage(message);
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
