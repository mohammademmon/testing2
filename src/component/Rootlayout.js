import React from "react";
import Header from "./navber/Header";
import Footer from "./footer/Footer";

const Rootlayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Rootlayout;
