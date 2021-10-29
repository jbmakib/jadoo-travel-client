import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const { signInWithGoogle, error, setError, setIsLoading } = useAuth();

    // handle sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {})
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    };
    return (
        <div className="container text-center">
            <h2>Please login Using</h2>
            <button
                className="btn btn-lg btn-google btn-block text-uppercase btn-outline"
                onClick={handleGoogleSignIn}
            >
                <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                    alt="Google logo"
                    width="50px"
                />
            </button>
            {error ? <div className="text-danger">{error}</div> : ""}
        </div>
    );
};

export default Login;
