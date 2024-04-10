import React,{Suspense} from "react";
import loadingGif from "../images/loadingGif.gif"
const Navbar = React.lazy(() => import("../components/Navbar/Navbar"));
const Content = React.lazy(() => import("../components/Content/Content"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));

const Home = () => {
  return (
    <div className="container-fluid">
      <Suspense fallback={<img src={loadingGif} style={{padding:'500px 900px'}} alt="Loading..." />}>
      <Navbar />
      <Content />
      <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
