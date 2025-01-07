import { useEffect } from "react";

import { NOW_PLAYING_URL, API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export default function useNowPlayingMovies() {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    try {
      const res = await fetch(NOW_PLAYING_URL, API_OPTIONS);
      const data = await res.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
