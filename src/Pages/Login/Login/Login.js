import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <div className="container text-center">
            <h2>Please login Using</h2>
            <button className="btn btn-lg btn-google btn-block text-uppercase btn-outline">
                <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                    alt="Google logo"
                    width="50px"
                />
            </button>
        </div>
    );
};

export default Login;
