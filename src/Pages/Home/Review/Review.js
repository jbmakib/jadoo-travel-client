import React from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import "./Review.css";

const Review = () => {
    return (
        <div className="review">
            <div className="container py-5">
                <h1 className="text-center">Review</h1>
                <div className="row row-cols-1 row-cols-md-2 align-items-center review-section-show">
                    <div>
                        <h1 className="h1-before">What people say about Us.</h1>
                    </div>
                    <div>
                        <div
                            id="carouselExampleIndicators"
                            className="carousel carousel-dark carousel-fade w-100 h-100"
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
                            <div className="carousel-inner overflow-visible d-flex">
                                <div className="carousel-item active w-90 mx-auto">
                                    <CarouselCard
                                        img="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-1.jpg"
                                        author="Mike Taylor"
                                        location="Lahore, Pakistan"
                                    >
                                        "On the windows talking painted pasture
                                        yet its express parties use. Sure last
                                        upon he same as knew next. Of believed
                                        or diverted no."
                                    </CarouselCard>
                                </div>
                                <div className="carousel-item w-90 mx-auto">
                                    <CarouselCard
                                        img="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-2.jpg"
                                        author="Mike br."
                                        location="Bristol, UK"
                                    >
                                        "On the windows talking painted pasture
                                        yet its express parties use. Sure last
                                        upon he same as knew next. Of believed
                                        or diverted no."
                                    </CarouselCard>
                                </div>
                                <div className="carousel-item w-90 mx-auto">
                                    <CarouselCard
                                        img="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-3.jpg"
                                        author="M. Jawad"
                                        location="Istanbul, Turkey"
                                    >
                                        "On the windows talking painted pasture
                                        yet its express parties use. Sure last
                                        upon he same as knew next. Of believed
                                        or diverted no."
                                    </CarouselCard>
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
