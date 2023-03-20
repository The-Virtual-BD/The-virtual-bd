import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Apply from "../Components/Career/Apply/Apply";
import CareerHero from "../Components/Career/CareerHero/CareerHero";
import Menu from "../Components/Header/Menu";
import Footer from "./../Components/Footer/Footer";
import TopHeader from "./../Components/TopHeader/TopHeader";

function Career() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Career</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <CareerHero>Career</CareerHero>
      <Apply />
      <Footer />
    </>
  );
}

export default Career;
