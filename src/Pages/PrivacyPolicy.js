import React from "react";

import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import Privcy from "./../Components/PrivacyPolicy/Privcy";
import Footer from "./../Components/Footer/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
     <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Privacy Policy</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <Privcy />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
