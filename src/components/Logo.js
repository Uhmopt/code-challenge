import { Typography } from "@mui/material";
import { APP_NAME } from "lib/global";
import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ variant = "text", size = "medium" }) {
  return (
    <div className="glow-green filter drop-shadow-2xl">
      <Link to="/">
        {variant === "text" ? (
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        ) : (
          <Typography variant="h6" component="div">
            {APP_NAME}
          </Typography>
        )}
      </Link>
    </div>
  );
}
