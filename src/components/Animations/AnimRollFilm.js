import data from "assets/lottie/roll-film.json";
import React from "react";
import LottieIcon from "./LottieIcon";

export default function AnimRollFilm({ width = 200, loop = true }) {
  return (
    <div>
      <LottieIcon width={width} data={data} loop={loop} />
    </div>
  );
}
