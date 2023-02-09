import React from "react";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import Footer from "./../Components/Footer/Footer";
import ContuctHero from "../Components/ContuctUs/ContuctHero/ContuctHero";
import ContuctForm from "../Components/ContuctUs/ContuctForm/ContuctForm";
import ProjectStart from "../Components/ContuctUs/ProjectStart/ProjectStart";
import { useEffect } from "react";

function ContuctUs() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <TopHeader />
      <Menu />
      <ContuctHero />
      <ContuctForm />
      <ProjectStart />
      <Footer />
    </>
  );
}

export default ContuctUs;
