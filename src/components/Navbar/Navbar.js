import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail, IoIosPaper, IoMdHome, IoMdPerson, IoMdSettings, IoMdFiling, IoMdMusicalNotes } from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import resume from "images/Sean McQuaid - Resume.pdf";

const Navbar = props => {
    const [isMenuDisplayed, setMenuDisplayed] = useState(false);

    return (
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
        <HamburgerMenu>
            <HamburgerIcon/>
        </HamburgerMenu>
        <ContactList>
            <ContactListItem>
                <ContactListItemLink href="https://www.linkedin.com/in/sean-mcquaid-292b3588/" target="blank">
                    <IoLogoLinkedin/>
                </ContactListItemLink>
            </ContactListItem>
            <ContactListItem>
                <ContactListItemLink href="https://github.com/seanmcquaid" target="blank">
                    <IoLogoGithub/>
                </ContactListItemLink>
            </ContactListItem>
            <ContactListItem>
                <ContactListItemLink href={resume} target="blank">
                    <IoIosPaper/>
                </ContactListItemLink>
            </ContactListItem>
        </ContactList>
    </NavbarContainer>)
};

const NavbarContainer = styled.div`
    background-color : #4E6E58;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    width : 80px;
    top : 0;
    height : 100%;
    min-height : 100%;
    @media (max-width : 915px){
        position : fixed;
        width : 100%;
        min-width : 100%;
        height : auto;
        min-height : auto;
        flex-direction : row;
    }
`;

const LinkContainer = styled(Link)`
    text-align : center;
    padding: 1rem;
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
    @media (max-width : 915px){
        flex-direction : row;
    }
    @media (max-width : 520px){
        display : none;
    }
`;

const NavLink = styled(Link)`
    padding : 1rem;
    text-decoration : none;
    font-size : 1.5rem;
    color : #00000096;
    height : 30px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    @media(max-width : 915px){
        width : 30px;
    }
`;

const NavLinkLabel = styled.span`
    font-size : 1rem;
    display : none;
`;

const NavLinkIconContainer = styled.div`
    display : block;
    font-size : 1.5rem;
    width : 100%;
    height: 100%;
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
    @media (max-width : 915px){
        display : none;
    }
`;

const ContactListItem = styled.li`
    margin : 0.75rem
`;

const ContactListItemLink = styled.a`
    text-decoration : none;
    font-size : 1.5rem;
    color : #00000096;
`;

const HamburgerMenu = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding : 1rem;
    font-size: 1.5rem;
    @media (min-width : 520px){
        display : none;
    }
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
`;

export default Navbar;