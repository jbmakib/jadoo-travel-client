import React from "react";
import NavItem from "../NavItem/NavItem";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
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
                        <NavItem href="/login">Login</NavItem>
                        {/* <li className="nav-item ms-4">
                            <a
                                className="
                                nav-link
                                border
                                rounded-pill
                                px-4
                                border-dark border-2
                                active
                                hover-bg-dark
                            "
                                href="/"
                            >
                                Sign up
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
