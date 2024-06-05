import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="min-h-screen">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
