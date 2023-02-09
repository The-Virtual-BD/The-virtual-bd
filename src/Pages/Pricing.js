import React from "react";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import Footer from "./../Components/Footer/Footer";
import PricingHero from "../Components/Pricing/PricingHero/PricingHero";
import PricingPlan from "../Components/Pricing/PricingPlan/PricingPlan";
import { useEffect } from "react";

function Pricing() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <TopHeader />
      <Menu />
      <PricingHero />
      <PricingPlan />
      <Footer />
    </>
  );
}

export default Pricing;
