import data from "assets/lottie/play-button.json";
import React from "react";
import LottieIcon from "./LottieIcon";

export default function AnimPlayButton({ width = 200, loop = true }) {
  return (
    <div>
      <LottieIcon width={width} data={data} loop={loop} />
    </div>
  );
}
