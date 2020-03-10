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
    flex-direction : row;
    justify-content : center;
    align-items : center;
    width : 100%;
    min-width : 100%;
    height : 100%;
    min-height : 100%;
    background-color : #4C8577;
    @media(max-width : 520px){
        flex-direction : column;
    }
    @media(max-width : 915px){
        margin-top : 3.5rem;
    }
`;

export default Layout;