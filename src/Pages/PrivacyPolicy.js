import React from "react";

import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import Privcy from "./../Components/PrivacyPolicy/Privcy";
import Footer from "./../Components/Footer/Footer";
import { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <TopHeader />
      <Menu />
      <Privcy />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
