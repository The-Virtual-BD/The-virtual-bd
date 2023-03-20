import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../Components/Footer/Footer";
import Terms from "../Components/Terms/Terms";
import TopHeader from "../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";

function TermsCondition() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Terms Condition</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <Terms />
      <Footer />
    </>
  );
}

export default TermsCondition;
