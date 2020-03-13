import React from "react";
import styled from "styled-components";
import {Navbar} from "components/components";

const Layout = ({children}) => (
    <Container>
        <Navbar/>
        {children}
    </Container>
);

const Container = styled.div`
    display : flex;
    width : 100vw;
    height : 100vh;
    background-color : #4C8577;
    @media(max-width : 520px){
        flex-direction : column;
    }
    @media(max-width : 915px){
        margin-top : 4.5rem;
    }
`;

export default Layout;