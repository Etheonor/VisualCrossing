import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import heart from "./../images/heart.png";

const Thanks = () => (
  <Layout>
    <SEO title="Thanks for your donation" />
    <h1>Thank you</h1>
    <img style={{ textAlign: "center" }} src={heart} alt="heart" />
    <p>
      Your donation is making a difference and will help me to improve Sweetter!
    </p>
  </Layout>
);

export default Thanks;
