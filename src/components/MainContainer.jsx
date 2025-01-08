import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const randomNumber = Math.floor(Math.random() * 20);
  const mainMovie = nowPlayingMovies[randomNumber];
  if (!mainMovie) return;
  const { original_title, overview } = mainMovie;
  console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
}
