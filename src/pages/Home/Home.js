import React from "react";
import {
    HeaderText, 
    SubHeaderText, 
    LinkButton,  
    LeftContainer, 
    RightContainer,
    Headshot
} from "components/components";
import headshot from "images/headshot.jpg"
import styled from "styled-components";

const Home = () => (
    <HomePageContainer>
        <LeftContainer>
            <HeaderText>Hello, I am Sean!</HeaderText>
            <SubHeaderText>Software Engineer, Front End Web Developer, Jazz Musician </SubHeaderText>
            <LinkButton route="/contact" title="Contact Me"/>
        </LeftContainer>
        <RightContainer>
            <Headshot src={headshot} alt="headshot"/>
        </RightContainer>
    </HomePageContainer>
);

const HomePageContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    align-self : center;
    @media (max-width : 915px){
        flex-direction : column-reverse;
        margin : auto;
    }
`;

export default Home;