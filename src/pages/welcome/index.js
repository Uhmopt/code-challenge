import { Container } from "@mui/material";
import image from "assets/img/back/1.jpg";
import Layout from "layouts";
import BannerHeader from "layouts/BannerHeader";
import MoviesComponent from "pages/movies/MoviesComponent";
import React from "react";

export default function Welcome() {
  return (
    <Layout fullWidth>
      <BannerHeader
        image={image}
        title="Code challenge cinema"
        subtitle="New cinema comes!"
      />
      <Container>
        <MoviesComponent />
      </Container>
    </Layout>
  );
}
