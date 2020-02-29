import React from "react";
import {styled} from "styled-components";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <Link>
                Image of Logo
            </Link>
            <nav>
                Nav info
            </nav>
            <ul>
                contact methods
            </ul>
        </div>
    )
};

export default Navbar;