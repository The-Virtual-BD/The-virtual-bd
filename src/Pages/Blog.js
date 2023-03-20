import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
            <meta charSet="utf-8" />
            <title>The Virtual BD || Blogs</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <TopHeader />
      <Menu />
      <BlogPage />
      <Footer />
    </>
  );
}

export default Blog;
