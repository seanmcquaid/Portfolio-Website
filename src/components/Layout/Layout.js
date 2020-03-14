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
    justify-content  :center;
    align-items : center;
    @media(max-width : 520px){
        flex-direction : column;
        height : auto;
        width : auto;
        margin-top : 6.5rem;
    }
    @media(max-width : 975px){
        margin-top : 4.5rem;
        height : auto;
        width : auto;
    }
`;

export default Layout;