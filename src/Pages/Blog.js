import React from "react";
import { useEffect } from "react";
import BlogPage from "../Components/BlogPage/BlogPage";
import Menu from "../Components/Header/Menu";
import TopHeader from "../Components/TopHeader/TopHeader";
import Footer from "./../Components/Footer/Footer";


function Blog() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <>
      <TopHeader />
      <Menu />
      <BlogPage />
      <Footer />
    </>
  );
}

export default Blog;
