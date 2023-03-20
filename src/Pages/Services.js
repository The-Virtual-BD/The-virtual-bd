import React from "react";
import Menu from "../Components/Header/Menu";
import Banner from "../Components/Services/Banner";
import Faq from "../Components/Services/Faq/Faq";
import Buisness from "../Components/Services/HelpBuisness/Buisness";
import Resources from "../Components/Services/Resources/Resources";
import TopHeader from "../Components/TopHeader/TopHeader";
import Counter from "./../Components/Counter/Counter";
import Footer from "../Components/Footer/Footer";
import GlobalBuisness from "../Components/Services/GlobalBuisness/GlobalBuisness";
import BrandSlider from "./../Components/BrandSlider/BrandSlider";
import Provide from "./../Components/Provived/Provide";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Services() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
     <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Services</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <TopHeader />
      <Menu />
      <Banner />
      <Resources />
      <Provide />
      <Buisness />
      <Faq />
      <Counter />
      <BrandSlider />
      <GlobalBuisness />
      <Footer />
    </>
  );
}

export default Services;
