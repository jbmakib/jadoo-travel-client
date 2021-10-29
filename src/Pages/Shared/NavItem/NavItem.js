import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, href }) => {
    return (
        <li className="nav-item ms-4">
            <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to={href}
            >
                {children}
            </NavLink>
        </li>
    );
};

export default NavItem;
