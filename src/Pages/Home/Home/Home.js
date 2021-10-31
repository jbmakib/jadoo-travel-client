import React from "react";
import Banner from "../Banner/Banner";
import OurStory from "../OurStory/OurStory";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Reviews />
            <OurStory />
        </div>
    );
};

export default Home;
