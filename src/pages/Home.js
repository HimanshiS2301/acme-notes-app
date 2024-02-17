import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
