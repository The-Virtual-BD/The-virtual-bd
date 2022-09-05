import React from "react";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Header/Menu";
import NotFoundContent from "../Components/NotFound/NotFoundContent";
import TopHeader from "../Components/TopHeader/TopHeader";

function NotFound() {
  return (
    <div>
      <TopHeader />
      <Menu />
      <NotFoundContent />
      <Footer />
    </div>
  );
}

export default NotFound;
