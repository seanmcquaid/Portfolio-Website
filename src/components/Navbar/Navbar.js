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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavContainer>
            <ContactList>
                <ContactListItem>LinkedIn</ContactListItem>
                <ContactListItem>Email</ContactListItem>
                <ContactListItem>Resume</ContactListItem>
            </ContactList>
        </NavbarContainer>
    )
};

const NavbarContainer = styled.div`
    background-color : #4E6E58;
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
    background-color : #3D5652;
    margin : 0.5rem;
    
`;

const NavContainer = styled.nav`
    text-align : center;
    display : flex;
    flex-direction : column;
`;

const NavLink = styled(Link)`
    margin : 0.5rem;
    text-decoration : none;
`;

const ContactList = styled.ul`
    display : flex;
    flex-direction : column;
    text-align : center;
    width: 100%;
    padding: 0;
    list-style: none;
`;

const ContactListItem = styled.li`
    margin : 0.5rem
`;

export default Navbar;