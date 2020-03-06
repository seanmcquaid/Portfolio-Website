import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail, IoIosPaper, IoMdHome, IoMdPerson, IoMdSettings, IoMdFiling, IoMdMusicalNotes } from "react-icons/io";

const Navbar = () => {
    return(
        <NavbarContainer>
            <LinkContainer to="/">
                <IoMdMusicalNotes/>
            </LinkContainer>
            <NavContainer>
                <NavLink to="/">
                    <NavLinkIconContainer><IoMdHome/></NavLinkIconContainer>
                    <NavLinkLabel>Home</NavLinkLabel>
                </NavLink>
                <NavLink to="/about">
                    <NavLinkIconContainer><IoMdPerson/></NavLinkIconContainer>
                    <NavLinkLabel>About</NavLinkLabel>
                </NavLink>
                <NavLink to="/skills">
                    <NavLinkIconContainer><IoMdSettings/></NavLinkIconContainer>
                    <NavLinkLabel>Skills</NavLinkLabel>
                </NavLink>
                <NavLink to="/projects">
                    <NavLinkIconContainer><IoMdFiling/></NavLinkIconContainer>
                    <NavLinkLabel>Projects</NavLinkLabel>
                </NavLink>
                <NavLink to="/contact">
                    <NavLinkIconContainer><IoMdMail/></NavLinkIconContainer>
                    <NavLinkLabel>Contact</NavLinkLabel>
                </NavLink>
            </NavContainer>
            <ContactList>
                <ContactListItem>
                    <ContactListItemLink>
                        <IoLogoLinkedin/>
                    </ContactListItemLink>
                </ContactListItem>
                <ContactListItem>
                    <ContactListItemLink>
                        <IoLogoGithub/>
                    </ContactListItemLink>
                </ContactListItem>
                <ContactListItem>
                    <ContactListItemLink>
                        <IoIosPaper/>
                    </ContactListItemLink>
                </ContactListItem>
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
    width : 80px;
    height : 100%;
    min-height: 100%;
    top : 0;
`;

const LinkContainer = styled(Link)`
    text-align : center;
    margin : 0.5rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-size : 1.5rem;
    color : #00000096;
`;

const NavContainer = styled.nav`
    text-align : center;
    display : flex;
    flex-direction : column;
`;

const NavLink = styled(Link)`
    margin : 0.75rem;
    text-decoration : none;
    font-size : 1.5rem;
    color : #00000096;
`;

const NavLinkLabel = styled.span`
    font-size : 1rem;
    display : none;
`;

const NavLinkIconContainer = styled.div`
    display : block;
    font-size : 1.5rem;
    &:hover + ${NavLinkLabel}{
        display : block;
    }
    &:hover {
        display : none;
    }
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

const ContactListItemLink = styled(Link)`
    text-decoration : none;
    font-size : 1.5rem;
    color : #00000096;
`;

export default Navbar;