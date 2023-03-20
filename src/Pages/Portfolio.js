import React from "react";
import Menu from "./../Components/Header/Menu";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Footer from "./../Components/Footer/Footer";
import PortfolioHero from "../Components/Portfolio/PortfolioHero/PortfolioHero";
import ProtfolioSlider from "./../Components/Portfolio/ProtfolioSlider/ProtfolioSlider";

import ProjectGallary from "./../Components/Portfolio/OurProject/ProjectGallary";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Portfolio() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Portfolio</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <PortfolioHero />
      <ProtfolioSlider />
      <ProjectGallary />
      <Footer />
    </>
  );
}

export default Portfolio;
