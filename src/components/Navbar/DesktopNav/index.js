import React from 'react';
import {
  IoMdPerson,
  IoMdSettings,
  IoMdFiling,
  IoMdContact,
} from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DesktopNav = () => (
  <DesktopNavContainer data-testid="desktopNavMenu" id="desktopNavMenu">
    <NavLinksList>
      <NavLinksListItem>
        <NavLink
          to="/about"
          data-testid="desktopAboutLink"
          id="desktopAboutLink"
          title="About Page Link"
        >
          <NavLinkIconContainer>
            <IoMdPerson />
          </NavLinkIconContainer>
          <NavLinkLabel>About</NavLinkLabel>
        </NavLink>
      </NavLinksListItem>
      <NavLinksListItem>
        <NavLink
          to="/skills"
          data-testid="desktopSkillsLink"
          id="desktopSkillsLink"
          title="Skills Page Link"
        >
          <NavLinkIconContainer>
            <IoMdSettings />
          </NavLinkIconContainer>
          <NavLinkLabel>Skills</NavLinkLabel>
        </NavLink>
      </NavLinksListItem>
      <NavLinksListItem>
        <NavLink
          to="/projects"
          data-testid="desktopProjectsLink"
          id="desktopProjectsLink"
          title="Projects Page Link"
        >
          <NavLinkIconContainer>
            <IoMdFiling />
          </NavLinkIconContainer>
          <NavLinkLabel>Projects</NavLinkLabel>
        </NavLink>
      </NavLinksListItem>
      <NavLinksListItem>
        <NavLink
          to="/contact"
          data-testid="desktopContactLink"
          id="desktopContactLink"
          title="Contact Page Link"
        >
          <NavLinkIconContainer>
            <IoMdContact />
          </NavLinkIconContainer>
          <NavLinkLabel>Contact</NavLinkLabel>
        </NavLink>
      </NavLinksListItem>
    </NavLinksList>
  </DesktopNavContainer>
);

const DesktopNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  @media (max-width: 520px) {
    display: none;
  }
  @media (max-height: 620px) {
    display: none;
  }
`;

const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 975px) {
    display: none;
  }
`;

const NavLinksListItem = styled.li``;

const NavLink = styled(Link)`
  margin-top: 0.25rem;
  padding: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ffffffb6;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 975px) {
    width: 30px;
  }
`;

const NavLinkLabel = styled.span`
  font-size: 1rem;
  visibility: hidden;
  @media (max-width: 520px) {
    display: none;
  }
`;

const NavLinkIconContainer = styled.div`
  display: block;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  &:hover + ${NavLinkLabel} {
    visibility: visible;
  }
`;

export default DesktopNav;
