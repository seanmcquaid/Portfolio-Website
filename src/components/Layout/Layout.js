import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'components/components';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
  </Container>
);

const Container = styled.div`
  display: flex;
  background-color: #4c8577;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 975px) {
    margin-top: 5rem;
  }
`;

export default Layout;
