import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-3 my-lg-0 my-3">
                        <img
                            src="https://jbmakib.github.io/travel-site-bootstrap/images/logo.png"
                            alt=""
                            width="150px"
                        />
                        <br />
                        <small>
                            Book your trip in minute, get full Control for much
                            longer
                        </small>
                    </div>
                    <div className="col-lg-3 my-lg-0 my-3">
                        <p className="fw-bold">Company</p>
                        <HashLink to="/home#services" className="footer-link">
                            <p>Services</p>
                        </HashLink>
                        <HashLink to="/home#reviews" className="footer-link">
                            <p>Reviews</p>
                        </HashLink>
                        <HashLink to="/home#about-us" className="footer-link">
                            <p>About Us</p>
                        </HashLink>
                    </div>
                    <div className="col-lg-3 my-lg-0 my-3">
                        <p className="fw-bold">Discover Our App</p>
                        <div className="d-flex justify-content-between">
                            <a
                                className="btn btn-outline-orange"
                                href="https://play.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Google Play
                            </a>
                            <a
                                className="btn btn-outline-orange"
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                App Store
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 my-lg-0 my-3">
                        <p className="fw-bold">Payment With</p>
                        <img
                            src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
                            alt="payment with"
                            className="w-100"
                        />
                    </div>
                </div>
                <br />
                <p className="text-center mb-0">
                    Copyright 2021 | All right reserved &copy;{" "}
                    <a
                        href="https://www.github.com/jbmakib"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-link"
                    >
                        Jawad Bin Mobin Akib
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
