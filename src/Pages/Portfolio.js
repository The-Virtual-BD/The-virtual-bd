import React from "react";
import Menu from "./../Components/Header/Menu";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Footer from "./../Components/Footer/Footer";
import PortfolioHero from "../Components/Portfolio/PortfolioHero/PortfolioHero";
import ProtfolioSlider from "./../Components/Portfolio/ProtfolioSlider/ProtfolioSlider";

import ProjectGallary from "./../Components/Portfolio/OurProject/ProjectGallary";
import { useEffect } from "react";

function Portfolio() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
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
