import React from "react";
import useAuth from "../../../hooks/useAuth";
import NavItem from "../NavItem/NavItem";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="images/logo.png" alt="" width="150px" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul
                        className="
                        navbar-nav
                        align-items-center
                        ms-auto
                        mb-2 mb-lg-0
                    "
                    >
                        <NavItem href="/">Home</NavItem>
                        {user.accessToken ? (
                            <>
                                <span className="fw-bold">
                                    {user.displayName}
                                </span>
                                <button
                                    className="btn btn-outline-dark rounded-pill border-2 ms-2"
                                    onClick={logOut}
                                >
                                    LogOut
                                </button>
                            </>
                        ) : (
                            <NavItem href="/login">Login</NavItem>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
