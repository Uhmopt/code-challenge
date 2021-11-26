import data from "assets/lottie/video-loading.json";
import React from "react";
import LottieIcon from "./LottieIcon";

export default function AnimVideoLoading({ width = 200, loop = true }) {
  return (
    <div>
      <LottieIcon width={width} data={data} loop={loop} />
    </div>
  );
}
