import React from 'react';
import {
  HeaderText,
  SubHeaderText,
  LinkButton,
  Headshot,
  ExternalLinkButton,
} from 'components';
import headshot from 'images/headshot.jp2';
import styled, { keyframes } from 'styled-components';

const Home = () => (
  <HomePageContainer id="homePage" data-testid="homePage">
    <Header>
      <HeaderText id="homePageHeader" data-testid="skillsPageHeader">
        Hello, I am Sean!
      </HeaderText>
      <SubHeaderText id="homePageSubHeader" data-testid="homePageSubHeader">
        Software Engineer, Front End Web Developer, Jazz Musician{' '}
      </SubHeaderText>
    </Header>
    <Main>
      <Headshot
        src={headshot}
        alt="headshotImage"
        id="headshotImage"
        data-testid="headshotImage"
      />
      <ButtonsContainer>
        <LinkButton route="/contact" title="Contact Me" />
        <ExternalLinkButton
          href="https://www.musicianthatcodes.com/"
          target="blank"
        >
          My Blog
        </ExternalLinkButton>
      </ButtonsContainer>
    </Main>
  </HomePageContainer>
);

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  transition: 0.5s;
  animation: ${fadeInAnimation} ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
  padding: 1rem 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Home;
