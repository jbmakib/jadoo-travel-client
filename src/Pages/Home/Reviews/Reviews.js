import React from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import "./Reviews.css";

const Reviews = () => {
    return (
        <div className="reviews" id="reviews">
            <div className="container py-5">
                <h1 className="text-center">Reviews</h1>
                <div className="row row-cols-1 row-cols-md-2 align-items-center reviews-section-show">
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
                                        Loved being able yo book everything in
                                        the one place, in one transaction. I
                                        will most definitely be using Travel
                                        Online for my holiday bookings again in
                                        the future! Thanks Jadoo Travel
                                    </CarouselCard>
                                </div>
                                <div className="carousel-item w-90 mx-auto">
                                    <CarouselCard
                                        img="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-2.jpg"
                                        author="Mike br."
                                        location="Bristol, UK"
                                    >
                                        Our booking was very easy to do online,
                                        I needed to make a few changes that I
                                        felt was not handled well at all. Once I
                                        spoke to the Team Manager, he was
                                        absolutely amazing.
                                    </CarouselCard>
                                </div>
                                <div className="carousel-item w-90 mx-auto">
                                    <CarouselCard
                                        img="https://jbmakib.github.io/travel-site-bootstrap/images/model/ratings-model-3.jpg"
                                        author="M. Jawad"
                                        location="Istanbul, Turkey"
                                    >
                                        The process was quick and easy, with our
                                        holiday going as smooth as we could have
                                        hoped for. Everything was sorted for us,
                                        and all we had to worry about was
                                        packing our suitcases!
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

export default Reviews;
