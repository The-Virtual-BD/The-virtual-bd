import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Header/Menu";
import TopHeader from "../Components/TopHeader/TopHeader";
import Login from "./../Components/Create&Singin/Login/Login";

function SingnIn() {
  return (
    <>
     <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Sign In</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <Login />
      <Footer />
    </>
  );
}

export default SingnIn;
