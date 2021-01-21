import React from 'react';
import { HeaderText, ParagraphText } from 'components/components';
import styled, { keyframes } from 'styled-components';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosPaper,
  IoMdMail,
} from 'react-icons/io';
import resume from 'images/Sean McQuaid - Resume.pdf';

const Contact = () => (
  <ContactPageContainer id="contactPage" data-testid="contactPage">
    <Header>
      <HeaderText id="contactPageHeader" data-testid="contactPageHeader">
        Contact Me
      </HeaderText>
      <ParagraphText id="contactInfoText" data-testid="contactInfoText">
        If you would like to contact me, I would love to hear from you! Feel
        free to contact me through my email, check out my LinkedIn or GitHub, or
        even look at my Resume!
      </ParagraphText>
    </Header>
    <Main>
      <ContactList>
        <ContactListItem>
          <ContactListItemLink
            href="https://www.linkedin.com/in/sean-mcquaid-292b3588/"
            target="blank"
            id="linkedInLink"
            data-testid="linkedInLink"
            title="LinkedIn Link"
          >
            <IoLogoLinkedin />
            <ContactListItemLinkLabel>LinkedIn</ContactListItemLinkLabel>
          </ContactListItemLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListItemLink
            href="https://github.com/seanmcquaid"
            target="blank"
            id="gitHubLink"
            data-testid="gitHubLink"
            title="GitHub Link"
          >
            <IoLogoGithub />
            <ContactListItemLinkLabel>GitHub</ContactListItemLinkLabel>
          </ContactListItemLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListItemLink
            href={resume}
            target="blank"
            id="resumeLink"
            data-testid="resumeLink"
            title="Resume Link"
          >
            <IoIosPaper />
            <ContactListItemLinkLabel>Resume</ContactListItemLinkLabel>
          </ContactListItemLink>
        </ContactListItem>
        <ContactListItem>
          <ContactListItemLink
            href="mailto: sean.m.mcquaid@gmail.com?subject=Hello!"
            data-testid="emailLink"
            id="emailLink"
            title="Email Link"
          >
            <IoMdMail />
            <ContactListItemLinkLabel>Email</ContactListItemLinkLabel>
          </ContactListItemLink>
        </ContactListItem>
      </ContactList>
    </Main>
  </ContactPageContainer>
);

const ContactPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 975px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 34rem;
  padding: 1rem;
  @media (max-width: 975px) {
    align-items: center;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  padding: 1rem;
  list-style: none;
`;

const ContactListItem = styled.li`
  padding: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const ContactListItemLinkLabel = styled.span`
  font-size: 1rem;
  margin: 0.25rem;
  visibility: hidden;
  @media (max-width: 975px) {
    visibility: visible;
  }
`;

const ContactListItemLink = styled.a`
  text-decoration: none;
  font-size: 2.5rem;
  color: #ffffffb6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 975px) {
    &:hover ${ContactListItemLinkLabel} {
      visibility: visible;
      transition: 0.25s;
      animation: ${fadeInAnimation} ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
`;

export default Contact;
