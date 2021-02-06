import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'components';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  @media (min-width: 975px) {
    flex-direction: row;
  }
  @media (max-height: 620px) {
    flex-direction: column;
  }
`;

export default Layout;
