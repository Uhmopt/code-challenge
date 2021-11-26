import { Paper } from "@mui/material";
import AnimPlayButton from "components/Animations/AnimPlayButton";
import RawImage from "components/images/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function MovieCard({ data = {} }) {
  return (
    <div className="relative h-60 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow hover:shadow-xl">
      <div className="relative w-full h-40">
        <RawImage
          className="absolute w-full h-full object-cover"
          src={data?.image ?? ""}
          alt={data?.title}
        />
        <div className="relative w-full h-full flex justify-center items-center transition-all duration-300 bg-gray-500 bg-opacity-0 hover:bg-opacity-40 opacity-0 hover:opacity-100">
          <AnimPlayButton width={100} />
        </div>
      </div>
      <div className={`w-full h-20`}>
        <Paper className="h-full px-4 pt-2">
          <CustomText variant="h6">{data?.title ?? ""}</CustomText>
          <CustomText>
            {String(data?.description ?? "").substr(0, 50)}
            {String(data?.description ?? "").length > 50 ? "..." : ""}
          </CustomText>
        </Paper>
      </div>
    </div>
  );
}
