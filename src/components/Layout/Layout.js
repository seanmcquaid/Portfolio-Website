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
    background-color : #4C8577;
    height : 100%;
    width : 100%;
    @media(max-width : 520px){
        flex-direction : column;
        height : auto;
        width : auto;
    }
    @media(max-width : 915px){
        margin-top : 6.5rem;
    }
`;

export default Layout;