import React from "react";
import Banner from "../Banner/Banner";
import OurStory from "../OurStory/OurStory";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Review />
            <OurStory />
        </div>
    );
};

export default Home;
