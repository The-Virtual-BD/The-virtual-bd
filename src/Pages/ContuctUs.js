import React from "react";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import Footer from "./../Components/Footer/Footer";
import ContuctHero from "../Components/ContuctUs/ContuctHero/ContuctHero";
import ContuctForm from "../Components/ContuctUs/ContuctForm/ContuctForm";
import ProjectStart from "../Components/ContuctUs/ProjectStart/ProjectStart";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function ContuctUs() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
     <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Contact</title>
            <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
