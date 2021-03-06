import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-60vh">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
