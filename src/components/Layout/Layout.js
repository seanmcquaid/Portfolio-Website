import React from "react";
import {styled} from "styled-components";
import Navbar from "components/Navbar/Navbar";

const Layout = props => {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
};

export default Layout;