import React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeaderText, SubHeaderText } from 'components';
import { Link } from 'react-router-dom';

const Error = () => (
  <ErrorPageContainer>
    <Header>
      <HeaderText>Error</HeaderText>
    </Header>
    <Main>
      <SubHeaderText>
        There was a problem going to the page you typed in. Please go to the{' '}
        <HomePageLink to="/" title="Home Page Link">
          Home Page
        </HomePageLink>{' '}
        and check out my portfolio!
      </SubHeaderText>
    </Main>
  </ErrorPageContainer>
);

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.5s;
  animation: ${fadeInAnimation} ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    justify-content: flex-start;
  }
`;

const Header = styled.header``;

const Main = styled.main``;

const HomePageLink = styled(Link)`
  text-decoration: none;
  color: #ffffffb6;
  &:hover {
    transition: 0.5s;
    color: #00000096;
    border-bottom: 2px solid #00000096;
  }
`;

export default Error;
