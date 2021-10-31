import React from "react";
import { Link } from "react-router-dom";

// we can see this component when no route found
const NotFound = () => {
    return (
        <div className="container my-5 py-5 text-center">
            <div className="my-3 py-3">
                <h1>404</h1>
                <h4>Page Not Found</h4>
                <p>
                    Looks like you are lost in space. But you were visiting the
                    site 😞
                </p>
                <Link to="/">&#8592; Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
