import { CssBaseline } from "@mui/material";
import React from "react";
import MainHeader from "./main/MainHeader";

export default function Header({ ...props }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainHeader />
    </React.Fragment>
  );
}
