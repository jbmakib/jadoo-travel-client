import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between row">
                    <div className="col-12 col-md-8 col-lg-6">
                        <p className="text-lightred">
                            BEST DESTINATIONS AROUND THE WORLD
                        </p>
                        <h1>Travel, enjoy and live a new and full life</h1>
                        <p className="text-muted">
                            At World Words, we are proud of our work, so we
                            often cover our travel website copywriting exploits
                            on our agency blog.
                        </p>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <img
                            src="https://jbmakib.github.io/travel-site-bootstrap/images/model/banner-model.png"
                            alt=""
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
