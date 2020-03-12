import React, { useState, useEffect } from "react";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail, IoIosPaper, IoMdHome, IoMdPerson, IoMdSettings, IoMdFiling, IoMdMusicalNotes } from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";
import resume from "images/Sean McQuaid - Resume.pdf";

const Navbar = props => {
    const [toggleMenuDisplayed, setToggleMenuDisplayed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(520);
    const [isLoading, setIsLoading] = useState(true);

    const hamburgerMenuOnClick = event => {
        setToggleMenuDisplayed(!toggleMenuDisplayed);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
       if(windowWidth <= 520 && !toggleMenuDisplayed){
           setToggleMenuDisplayed(true);
       }
    },[windowWidth, toggleMenuDisplayed]);

    console.log(windowWidth, toggleMenuDisplayed)

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
        <HamburgerIcon onClick={hamburgerMenuOnClick}/>
        <HamburgerMenu>
            <HamburgerNavLinksList toggleMenuDisplayed={toggleMenuDisplayed}>
                <HamburgerNavLink to="/about">
                    <HamburgerNavLinkLabel>About</HamburgerNavLinkLabel>
                </HamburgerNavLink>
                <HamburgerNavLink to="/skills">
                    <HamburgerNavLinkLabel>Skills</HamburgerNavLinkLabel>
                </HamburgerNavLink>
                <HamburgerNavLink to="/projects">
                    <HamburgerNavLinkLabel>Projects</HamburgerNavLinkLabel>
                </HamburgerNavLink>
                <HamburgerNavLink to="/contact">
                    <HamburgerNavLinkLabel>Contact</HamburgerNavLinkLabel>
                </HamburgerNavLink>
            </HamburgerNavLinksList>
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
    background-color : rgba(0,0,0,.3);
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    width : 80px;
    top : 0;
    height : 100%;
    z-index : 1;
    @media (max-width : 915px){
        position : fixed;
        width : 100%;
        min-width : 100%;
        flex-direction : row;
        height : auto;
    }
`;

// work on flex spacing for media query

const LinkContainer = styled(Link)`
    text-align : center;
    padding: 1rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-size : 1.5rem;
    color : #ffffffb6;
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
    color : #ffffffb6;
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
    color : #ffffffb6;
`;

const HamburgerMenu = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
    min-width : 100%;
    font-size: 1.5rem;
    position : fixed;
    top : 0;
    left : 0;
    @media (min-width : 520px){
        display : none;
    }
`;

const HamburgerIcon = styled(GiHamburgerMenu)`
    font-size : 1.5rem;
    padding : 1rem;
    &:hover {
        cursor : pointer;
    }
    @media (min-width : 520px){
        display : none;
    }
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const HamburgerNavLinksList = styled.nav`
    display : ${props => props.toggleMenuDisplayed ? "flex" : "none"};
    flex-direction : row;
    justify-content : center;
    align-items : center;
    margin-top : 4.95rem;
    position : fixed;
    width : 100%;
    min-width : 100%;
    background-color : rgba(0,0,0,.3);
    animation: ${fadeInAnimation} ease 0.5s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
`;

const HamburgerNavLink = styled(Link)`
    padding : 0.5rem;
    text-decoration : none;
    font-size : 1.5rem;
    color : #ffffffb6;
    height : 30px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const HamburgerNavLinkLabel = styled.span`
    font-size : 1rem;
`;

export default Navbar;