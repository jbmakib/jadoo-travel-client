import React from "react";
import { HashLink } from "react-router-hash-link";

const NavHashLink = ({ children, href }) => {
    return (
        <li className="nav-item mx-2">
            <HashLink className="nav-link" to={href}>
                {children}
            </HashLink>
        </li>
    );
};

export default NavHashLink;
