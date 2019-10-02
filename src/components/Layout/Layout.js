import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Navbar";
import Section from "../contents/Section/Section";

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>
    <Navbar />
    <p>
      <h1>Macbook Pro</h1>
    </p>
    <Section />
    <Section />
    <Section />
    <Section />
    <Section />
  </div>
);

export default Layout;
