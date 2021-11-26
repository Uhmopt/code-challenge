import { Container } from "@mui/material";
import React from "react";
import Body from "./Body";
import FixedWidgets from "./FixedWidgets";
import Footer from "./Footer";
import Header from "./Header";
import HtmlContainer from "./HtmlContainer";

export default function Layout({ children = <></>, fullWidth = false }) {
  return (
    <HtmlContainer>
      <Header />
      <div className="pt-14">
        {Boolean(fullWidth) ? (
          <Body>{children}</Body>
        ) : (
          <Container>
            <Body>{children}</Body>
          </Container>
        )}
      </div>
      <Footer />
      <FixedWidgets />
    </HtmlContainer>
  );
}
