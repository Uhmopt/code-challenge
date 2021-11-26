import Layout from "layouts";
import BannerHeader from "layouts/BannerHeader";
import React from "react";
import image from "assets/img/back/1.jpg";

export default function Welcome() {
  return (
    <Layout fullWidth>
      <BannerHeader
        image={image}
        title="Code challenge cinema"
        subtitle="New cinema comes!"
      />
    </Layout>
  );
}
