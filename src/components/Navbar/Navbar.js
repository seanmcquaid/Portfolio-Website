import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <NavbarContainer>
            <LinkContainer to="/">
                Image of Logo
            </LinkContainer>
            <NavContainer>
                NavContainer info
            </NavContainer>
            <ContactList>
                contact methods
            </ContactList>
        </NavbarContainer>
    )
};

const NavbarContainer = styled.div`
    position : absolute;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    width : 120px;
    height : 100%;
    min-height: 100%;
    top : 0;
`;

const LinkContainer = styled(Link)`
    text-align : center;
`;

const NavContainer = styled.nav`
    text-align : center;
`;

const ContactList = styled.ul`
    display : flex;
    flex-direction : column;
    text-align : center;
    width: 100%;
    padding: 0;
    list-style: none;
    margin: 0;
`;

export default Navbar;