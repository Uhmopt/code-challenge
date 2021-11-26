import { Container, useTheme } from "@mui/material";
import RawImage from "components/images/RawImage";
import CustomText from "components/typography/CustomText";
import React from "react";

export default function BannerHeader({
  image = "",
  title = "",
  subtitle = "",
}) {
  const theme = useTheme();

  return (
    <div className="relative w-full h-80">
      <RawImage
        className="absolute w-full h-full object-cover"
        src={image}
        alt={title}
      />
      <div
        className={`relative w-full h-full bg-gradient-to-t ${
          theme?.palette?.mode === "dark" ? "from-black" : "from-white"
        } to-transparent bg-opacity-50`}
      >
        <Container className="h-full">
          <div className="h-full flex flex-col justify-end py-6">
            <CustomText
              variant="h3"
              className="py-2 pl-4 border-l-8 border-primary"
              shadow
            >
              {title}
            </CustomText>
            <CustomText variant="h6" className="py-2 pl-8" shadow>
              {subtitle}
            </CustomText>
          </div>
        </Container>
      </div>
    </div>
  );
}
