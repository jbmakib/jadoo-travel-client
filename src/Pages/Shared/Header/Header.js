import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NavHashLink from "../NavHashLink/NavHashLink";
import NavItem from "../NavItem/NavItem";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar header navbar-expand-lg navbar-light sticky-top bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="https://jbmakib.github.io/travel-site-bootstrap/images/logo.png"
                        alt=""
                        width="150px"
                    />
                </NavLink>
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
                                <NavItem href="/my-orders">My Orders</NavItem>
                                <NavItem href="/manage-orders">
                                    Manage Orders
                                </NavItem>
                                <NavItem href="/add-service">
                                    Add Service
                                </NavItem>
                                <li>
                                    <span className="fw-bold">
                                        {user.displayName}
                                    </span>
                                </li>
                                <li>
                                    <button
                                        className="btn btn-outline-dark rounded-pill border-2 ms-2"
                                        onClick={logOut}
                                    >
                                        LogOut
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <NavHashLink href="/home#services">
                                    Services
                                </NavHashLink>
                                <NavHashLink href="/home#reviews">
                                    Reviews
                                </NavHashLink>
                                <NavHashLink href="/home#about-us">
                                    About Us
                                </NavHashLink>
                                <NavItem href="/login">Login</NavItem>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
