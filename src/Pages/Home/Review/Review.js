import React from "react";
import "./Review.css";

const Review = () => {
    return (
        <div className="review">
            <div className="container py-5">
                <h1 className="text-center">Review</h1>
                <div
                    className="row row-cols-1 row-cols-md-2 align-items-center"
                    style={{ height: "400px" }}
                >
                    <div>
                        <h1 className="h1-before">What people say about Us.</h1>
                    </div>
                    <div>
                        <div
                            id="carouselExampleIndicators"
                            className="
                                    carousel carousel-dark carousel-fade
                                    w-100
                                    h-100
                                "
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators m-0 mx-auto">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div
                                className="
                                        carousel-inner
                                        overflow-visible
                                        d-flex
                                    "
                            >
                                <div
                                    className="
                                            carousel-item
                                            active
                                            w-90
                                            mx-auto
                                        "
                                >
                                    <div className="card">
                                        <div className="position-relative">
                                            <span
                                                className="
                                                        position-absolute
                                                        top-0
                                                        start-0
                                                        translate-middle
                                                    "
                                            >
                                                <img
                                                    src="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-1.jpg"
                                                    className="rounded-circle"
                                                    width="50"
                                                    height="50"
                                                    alt=""
                                                />
                                            </span>
                                            <div className="card-body">
                                                <p className="mb-3">
                                                    "On the windows talking
                                                    painted pasture yet its
                                                    express parties use. Sure
                                                    last upon he same as knew
                                                    next. Of believed or
                                                    diverted no."
                                                </p>
                                                <p className="h5">
                                                    Mike Taylor
                                                </p>
                                                <p className="mb-0">
                                                    Lahore, Pakistan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item w-90 mx-auto">
                                    <div className="card">
                                        <div className="position-relative">
                                            <span
                                                className="
                                                        position-absolute
                                                        top-0
                                                        start-0
                                                        translate-middle
                                                    "
                                            >
                                                <img
                                                    src="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-2.jpg"
                                                    className="rounded-circle"
                                                    width="50"
                                                    height="50"
                                                    alt=""
                                                />
                                            </span>
                                            <div className="card-body">
                                                <p className="mb-3">
                                                    "Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Eum tenetur quas
                                                    fugiat laudantium voluptas
                                                    dolore, sunt debitis
                                                    possimus."
                                                </p>
                                                <p className="h5">Mike br.</p>
                                                <p className="mb-0">
                                                    Bristol, UK
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item w-90 mx-auto">
                                    <div className="card">
                                        <div className="position-relative">
                                            <span
                                                className="
                                                        position-absolute
                                                        top-0
                                                        start-0
                                                        translate-middle
                                                    "
                                            >
                                                <img
                                                    src="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-3.jpg"
                                                    className="rounded-circle"
                                                    width="50"
                                                    height="50"
                                                    alt=""
                                                />
                                            </span>
                                            <div className="card-body">
                                                <p className="mb-3">
                                                    "Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Quasi consequuntur
                                                    fuga maxime officia rem.
                                                    Placeat esse natus minima
                                                    corrup."
                                                </p>
                                                <p className="h5">M. Jawad</p>
                                                <p className="mb-0">
                                                    Istanbul, Turkey
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
