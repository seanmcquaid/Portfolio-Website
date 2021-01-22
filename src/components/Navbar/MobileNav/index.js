import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const MobileNav = ({ mobileMenuItemOnClick, isMobileMenuDisplayed }) => (
  <MobileMenu data-testid="mobileNavMenu" id="mobileNavMenu">
    <MobileNavLinksList isMobileMenuDisplayed={isMobileMenuDisplayed}>
      <MobileNavListItem>
        <MobileNavLink
          to="/about"
          onClick={mobileMenuItemOnClick}
          data-testid="mobileAboutLink"
          id="mobileAboutLink"
          title="About Page Link"
        >
          <MobileNavLinkLabel>About</MobileNavLinkLabel>
        </MobileNavLink>
      </MobileNavListItem>
      <MobileNavListItem>
        <MobileNavLink
          to="/skills"
          onClick={mobileMenuItemOnClick}
          data-testid="mobileSkillsLink"
          id="mobileSkillsLink"
          title="Skills Page Link"
        >
          <MobileNavLinkLabel>Skills</MobileNavLinkLabel>
        </MobileNavLink>
      </MobileNavListItem>
      <MobileNavListItem>
        <MobileNavLink
          to="/projects"
          onClick={mobileMenuItemOnClick}
          data-testid="mobileProjectsLink"
          id="mobileProjectsLink"
          title="Projects Page Link"
        >
          <MobileNavLinkLabel>Projects</MobileNavLinkLabel>
        </MobileNavLink>
      </MobileNavListItem>
      <MobileNavListItem>
        <MobileNavLink
          to="/contact"
          onClick={mobileMenuItemOnClick}
          data-testid="mobileContactLink"
          id="mobileContactLink"
          title="Contact Page Link"
        >
          <MobileNavLinkLabel>Contact</MobileNavLinkLabel>
        </MobileNavLink>
      </MobileNavListItem>
    </MobileNavLinksList>
  </MobileMenu>
);

const MobileMenu = styled.div`
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

const MobileNavLinksList = styled.ul`
  list-style: none;
  display: ${(props) => (props.isMobileMenuDisplayed ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: 6.25rem;
  position: fixed;
  width: 100%;
  min-width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${fadeInAnimation} ease 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

const MobileNavListItem = styled.li``;

const MobileNavLink = styled(Link)`
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

const MobileNavLinkLabel = styled.span`
  font-size: 1rem;
`;

MobileNav.propTypes = {
  mobileMenuItemOnClick: propTypes.func.isRequired,
  isMobileMenuDisplayed: propTypes.bool.isRequired,
};

export default MobileNav;
