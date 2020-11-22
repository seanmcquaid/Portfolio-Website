import React from 'react';
import {
  HeaderText,
  SubHeaderText,
  LinkButton,
  Headshot,
} from 'components/components';
import headshot from 'images/headshot.jpg';
import styled, { keyframes } from 'styled-components';

const Home = () => (
  <HomePageContainer id="homePage" data-testid="homePage">
    <LeftContainer>
      <HeaderText id="homePageHeader" data-testid="skillsPageHeader">
        Hello, I am Sean!
      </HeaderText>
      <SubHeaderText id="homePageSubHeader" data-testid="homePageSubHeader">
        Software Engineer, Front End Web Developer, Jazz Musician{' '}
      </SubHeaderText>
      <LinkButton route="/contact" title="Contact Me" />
    </LeftContainer>
    <RightContainer>
      <Headshot
        src={headshot}
        alt="headshotImage"
        id="headshotImage"
        data-testid="headshotImage"
      />
    </RightContainer>
  </HomePageContainer>
);

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 975px) {
    flex-direction: column-reverse;
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

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 250px;
  margin: 0 1rem;
  animation: ${fadeInAnimation} ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  @media (max-width: 520px) {
  }
`;

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  max-width: 300px;
  animation: ${fadeInAnimation} ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    margin: 0;
    max-width: 220px;
    max-height: 290px;
  }
  @media (max-width: 520px) {
  }
`;

export default Home;
