import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-dark text-white">
            <div className="container mt-5 py-3">
                <div className="row">
                    <div className="col-lg-3">
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
                    <div className="col-lg-6 row">
                        <div className="col-lg-6">
                            <h6 className="fw-bold">Company</h6>
                            <br />
                            <p>About</p>
                            <p>Carrer</p>
                            <p>Mobile</p>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="fw-bold">Contact</h6>
                            <br />
                            <p>Help/FAQ</p>
                            <p>Press</p>
                            <p>Affiliates</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <p>Discover Our App</p>
                        <div className="d-flex justify-content-between">
                            <a
                                className="btn btn-dark"
                                href="https://play.google.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Google Play
                            </a>
                            <a
                                className="btn btn-dark"
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                App Store
                            </a>
                        </div>
                    </div>
                </div>
                <br />
                <p className="text-center mb-0">
                    Copyright 2021 | All right reserved &copy;
                    <a
                        href="https://www.github.com/jbmakib"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                    >
                        Jawad Bin Mobin Akib
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
