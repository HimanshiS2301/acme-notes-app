import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer container bg-white">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Product</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/">Features</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Integrations</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Enterprise</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Solutions</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Resources</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/">Partners</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Developers</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Community</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Blog</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Help Center</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="/">About us</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Leadership</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">News</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Media Kit</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="/">Careers</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <NavLink className="link-dark" to="/">
                  <svg className="bi" width="24" height="24">
                    <FontAwesomeIcon icon={faTwitter} />
                  </svg>
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="link-dark" to="/">
                  <svg className="bi" width="24" height="24">
                    <FontAwesomeIcon icon={faInstagram} />
                  </svg>
                </NavLink>
              </li>
              <li className="ms-3">
                <NavLink className="link-dark" to="/">
                  <svg className="bi" width="24" height="24">
                    <FontAwesomeIcon icon={faFacebook} />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
