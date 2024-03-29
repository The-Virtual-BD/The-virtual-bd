import React, { useEffect } from "react";
import Counter from "../Components/Counter/Counter";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Header/Menu";
import Hero from "../Components/Hero/Hero";
import TopHeader from "../Components/TopHeader/TopHeader";
import Testimonial from "../Components/Testimonial/Testimonial";
import TeamMember from "../Components/TeamMember/TeamMember";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import GlobalBuisness from "./../Components/Services/GlobalBuisness/GlobalBuisness";
import Provide from "./../Components/Provived/Provide";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>The Virtual BD || Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <TopHeader />
      <Menu />
      <Hero />
      <Provide />
      <Testimonial />
      {/* <TeamMember /> */}
      <Counter />
      <BrandSlider />
      <GlobalBuisness />
      <Footer />
    </div>
  );
}

export default Home;
