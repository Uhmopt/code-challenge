import { Typography } from "@mui/material";
import { APP_NAME } from "lib/global";
import React from "react";

export default function Logo({ variant = "text", size = "medium" }) {
  return (
    <div className="glow-green filter drop-shadow-2xl">
      {variant === "text" ? (
        <Typography variant="h6" component="div">
          {APP_NAME}
        </Typography>
      ) : (
        <Typography variant="h6" component="div">
          {APP_NAME}
        </Typography>
      )}
    </div>
  );
}
