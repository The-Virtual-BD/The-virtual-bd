import React from "react";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import RegisterComp from "./../Components/Create&Singin/Register/RegisterComp";
import Footer from "./../Components/Footer/Footer";
import { Helmet } from "react-helmet";

function Register() {
  return (
    <>
     <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Register</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <RegisterComp />
      <Footer />
    </>
  );
}

export default Register;
