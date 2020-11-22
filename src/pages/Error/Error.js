import React from 'react';
import styled from 'styled-components';
import { HeaderText, SubHeaderText } from 'components/components';
import { Link } from 'react-router-dom';

const Error = () => (
  <ErrorPageContainer>
    <HeaderText>Error</HeaderText>
    <SubHeaderText>
      There was a problem going to the page you typed in. Please go to the{' '}
      <HomePageLink to="/">Home Page</HomePageLink> and check out my portfolio!
    </SubHeaderText>
  </ErrorPageContainer>
);

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

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
