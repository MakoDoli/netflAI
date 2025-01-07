import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";

export default function Browse() {
  useNowPlayingMovies();
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  console.log(nowPlayingMovies);

  return (
    <div className="flex ">
      <Header />
    </div>
  );
}
