import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Header() {
  const navigate = useNavigate();
  const currentUser = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        console.warn(error);
        // navigate("/browse");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //if user is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // if User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full flex justify-between h-16 absolute px-8 py-8 bg-gradient-to-b from-black z-10">
      <img
        // className="w-[148px] h-[40px] text-red-500 absolute top-6 left-8  "
        className="w-[148px] h-8 text-red-500 object-cover   "
        src="./icons/logo.svg"
        alt="logo"
      />
      {currentUser?.displayName && (
        <div className="flex gap-2  font-bold">
          <p>{currentUser?.displayName}</p>
          <img src="./icons/avatar.jpg" alt="avatar" className="w-8 h-8 " />
          <button className=" font-thin" onClick={handleSignout}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
