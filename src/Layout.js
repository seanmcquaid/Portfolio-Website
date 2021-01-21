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
  height: 100%;
  width: 100%;
  @media (max-width: 975px) {
    margin-top: 5rem;
  }
`;

export default Layout;
