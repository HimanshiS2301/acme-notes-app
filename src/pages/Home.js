import React from "react";
const Navbar = React.lazy(() => import("../components/Navbar/Navbar"));
const Content = React.lazy(() => import("../components/Content/Content"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
