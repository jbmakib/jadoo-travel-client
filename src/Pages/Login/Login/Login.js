import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import googleLogo from "../../../images/google-logo.png";
import "./Login.css";

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location.state?.from || "/";
    const { signInWithGoogle, error, setError, setIsLoading } = useAuth();

    // handle sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => history.push(redirect_URI))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    };
    return (
        <div className="container text-center my-5 py-5">
            <h2>Please login Using</h2>
            <button
                className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                onClick={handleGoogleSignIn}
            >
                <img src={googleLogo} alt="Google logo" width="50px" />
            </button>
            {error ? <div className="text-danger">{error}</div> : ""}
        </div>
    );
};

export default Login;
