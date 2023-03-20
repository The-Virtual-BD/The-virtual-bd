import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../Components/AboutUs/AboutHero/AboutHero";
import DigitalAgency from "../Components/AboutUs/DigitalAgency/DigitalAgency";
import HireUs from "../Components/AboutUs/HireUs/HireUs";
import IntroSlider from "../Components/AboutUs/Introduction/IntroSlider";
import Menu from "../Components/Header/Menu";
import TeamMember from "../Components/TeamMember/TeamMember";
import TopHeader from "../Components/TopHeader/TopHeader";
import Footer from "./../Components/Footer/Footer";

function AboutUs() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  
  return (
    <>
      <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || About Us</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <AboutHero />
      <DigitalAgency />
      <IntroSlider />
      <TeamMember />
      {/* <HireUs /> */}
      <Footer />
    </>
  );
}

export default AboutUs;
