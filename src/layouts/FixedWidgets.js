import { useTheme } from "@mui/material";
import AnimRollFilm from "components/Animations/AnimRollFilm";
import React from "react";

export default function FixedWidgets() {
  const theme = useTheme();

  return (
    <div className="relative">
      <div
        className={`fixed bottom-0 right-10 ${
          theme?.palette?.mode === "dark" ? "" : "opacity-10"
        }`}
      >
        <AnimRollFilm />
      </div>
    </div>
  );
}
