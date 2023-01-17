import React from "react";
import BlogPage from "../Components/BlogPage/BlogPage";
import Menu from "../Components/Header/Menu";
import TopHeader from "../Components/TopHeader/TopHeader";
import Footer from "./../Components/Footer/Footer";


function Blog() {
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
