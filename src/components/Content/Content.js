import React from "react";
import BackgroundImage1 from "../../images/background-img.jpg";
import Feature1 from "../../images/feature1.png";
import Feature2 from "../../images/feature2.png";
import Feature3 from "../../images/feature3.png";
import Feature4 from "../../images/feature4.png";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import "./content.css";

const Content = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            alt="background"
            src={BackgroundImage1}
            width="100%"
            className="topImage"
          />
        </div>
        <div className="col-md-6 col-sm-12 d-flex align-items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="top-section"
          >
            Keep your notes in organised, easy and safe way
            <div className="buttons">
              <button className="primary">Get Started</button>
              <button className="secondary">Download Application</button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="row border-0 alternate-color p-5" width="100%">
        <div className="col-md-3 col-sm-6">
          <LazyLoad height={200} offset={100}>
            <img
              className="img-fluid"
              src={Feature1}
              alt="Feature1"
              width="100%"
            />
          </LazyLoad>
        </div>
        <div className="col-md-9 col-sm-6 d-flex align-items-center">
          <div>
            <h2>Customizable Organization</h2>
            <p>
              Organize your notes your way. Create folders, add tags, and
              color-code your notes to stay organized and efficient.
            </p>
          </div>
        </div>
      </div>

      <div className="row border-0 p-5" width="100%">
        <div className="col-md-9 col-sm-6 d-flex align-items-center">
          <div>
            <h2>Collaboration and Sharing</h2>
            <p>
              Work together in real-time. Collaborate on projects, share notes
              with colleagues, and leave comments for seamless teamwork.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <LazyLoad height={200} offset={100}>
            <img
              className="img-fluid"
              src={Feature2}
              alt="Feature2"
              width="100%"
            />
          </LazyLoad>
        </div>
      </div>

      <div className="row border-0 alternate-color p-5" width="100%">
        <div className="col-md-3 col-sm-6">
          <LazyLoad height={200} offset={100}>
            <img
              className="img-fluid"
              src={Feature3}
              alt="Feature3"
              width="100%"
            />
          </LazyLoad>
        </div>
        <div className="col-md-9 col-sm-6 d-flex align-items-center">
          <div>
            <h2>Reminders and Alerts</h2>
            <p>
              Stay on track with reminders and alerts. Set reminders for
              important deadlines and receive alerts to keep you focused and
              productive.
            </p>
          </div>
        </div>
      </div>

      <div className="row border-0 p-5" width="100%">
        <div className="col-md-9 col-sm-6 d-flex align-items-center">
          <div>
            <h2>Offline Access</h2>
            <p>
              Never lose access to your notes. Enjoy offline access anytime,
              anywhere, whether you're traveling or have limited internet
              connectivity.
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <LazyLoad height={200} offset={100}>
            <img
              className="img-fluid"
              src={Feature4}
              alt="Feature4"
              width="100%"
            />
          </LazyLoad>
        </div>
      </div>

      <div className="row">
        <div className="bottom-section p-5 text-center">
          <h2 className="pb-3">Get the Acme Notes App</h2>
          <button className="download">Download Application</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
