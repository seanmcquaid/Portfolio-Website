import React from 'react';
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail,
  IoIosPaper,
  IoMdPerson,
  IoMdSettings,
  IoMdFiling,
  IoMdContact,
} from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import resume from 'images/Sean McQuaid - Resume.pdf';

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
    <ContactList data-testid="desktopContactMenu" id="desktopContactMenu">
      <ContactListItem>
        <ContactListItemLink
          href="https://www.linkedin.com/in/sean-mcquaid-292b3588/"
          target="blank"
          data-testid="desktopLinkedInLink"
          id="desktopLinkedInLink"
          title="LinkedIn Link"
        >
          <ContactListIconContainer>
            <IoLogoLinkedin />
          </ContactListIconContainer>
          <ContactListItemLinkLabel>LinkedIn</ContactListItemLinkLabel>
        </ContactListItemLink>
      </ContactListItem>
      <ContactListItem>
        <ContactListItemLink
          href="https://github.com/seanmcquaid"
          target="blank"
          data-testid="desktopGitHubLink"
          id="desktopGitHubLink"
          title="GitHub Link"
        >
          <ContactListIconContainer>
            <IoLogoGithub />
          </ContactListIconContainer>
          <ContactListItemLinkLabel>GitHub</ContactListItemLinkLabel>
        </ContactListItemLink>
      </ContactListItem>
      <ContactListItem>
        <ContactListItemLink
          href={resume}
          target="blank"
          data-testid="desktopResumeLink"
          id="desktopResumeLink"
          title="Resume Link"
        >
          <ContactListIconContainer>
            <IoIosPaper />
          </ContactListIconContainer>
          <ContactListItemLinkLabel>Resume</ContactListItemLinkLabel>
        </ContactListItemLink>
      </ContactListItem>
      <ContactListItem>
        <ContactListItemLink
          href="mailto: sean.m.mcquaid@gmail.com?subject=Hello!"
          data-testid="desktopEmailLink"
          id="desktopEmailLink"
          title="Email Link"
        >
          <ContactListIconContainer>
            <IoMdMail />
          </ContactListIconContainer>
          <ContactListItemLinkLabel>Email</ContactListItemLinkLabel>
        </ContactListItemLink>
      </ContactListItem>
    </ContactList>
  </DesktopNavContainer>
);

const DesktopNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 80%;
  @media (max-width: 975px) {
    flex-direction: row;
  }
  @media (max-width: 520px) {
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
  @media (max-height: 620px) {
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
  @media (max-height: 620px) {
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

const ContactList = styled.ul`
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
  @media (max-height: 620px) {
    display: none;
  }
`;

const ContactListItemLinkLabel = styled.span`
  font-size: 1rem;
  visibility: hidden;
`;

const ContactListItem = styled.li`
  margin: 0.25rem;
`;

const ContactListIconContainer = styled.div`
  font-size: 1.5rem;
  &:hover + ${ContactListItemLinkLabel} {
    visibility: visible;
  }
`;

const ContactListItemLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #ffffffb6;
`;

export default DesktopNav;
