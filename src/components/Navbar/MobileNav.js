import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const MobileNav = ({ mobileMenuItemOnClick, isMobileMenuDisplayed }) => (
  <HamburgerMenu data-testid="mobileNavMenu" id="mobileNavMenu">
    <HamburgerNavLinksList isMobileMenuDisplayed={isMobileMenuDisplayed}>
      <HamburgerNavLink
        to="/about"
        onClick={mobileMenuItemOnClick}
        data-testid="mobileAboutLink"
        id="mobileAboutLink"
        title="About Page Link"
      >
        <HamburgerNavLinkLabel>About</HamburgerNavLinkLabel>
      </HamburgerNavLink>
      <HamburgerNavLink
        to="/skills"
        onClick={mobileMenuItemOnClick}
        data-testid="mobileSkillsLink"
        id="mobileSkillsLink"
        title="Skills Page Link"
      >
        <HamburgerNavLinkLabel>Skills</HamburgerNavLinkLabel>
      </HamburgerNavLink>
      <HamburgerNavLink
        to="/projects"
        onClick={mobileMenuItemOnClick}
        data-testid="mobileProjectsLink"
        id="mobileProjectsLink"
        title="Projects Page Link"
      >
        <HamburgerNavLinkLabel>Projects</HamburgerNavLinkLabel>
      </HamburgerNavLink>
      <HamburgerNavLink
        to="/contact"
        onClick={mobileMenuItemOnClick}
        data-testid="mobileContactLink"
        id="mobileContactLink"
        title="Contact Page Link"
      >
        <HamburgerNavLinkLabel>Contact</HamburgerNavLinkLabel>
      </HamburgerNavLink>
    </HamburgerNavLinksList>
  </HamburgerMenu>
);

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 3.25rem;
  @media (min-width: 975px) {
    display: none;
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      margin-top: auto;
    }
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
  display: ${(props) => (props.isMobileMenuDisplayed ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 6.25rem;
  position: fixed;
  width: 100%;
  min-width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fadeInAnimation} ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const HamburgerNavLink = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ffffffb6;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HamburgerNavLinkLabel = styled.span`
  font-size: 1rem;
`;
export default MobileNav;
