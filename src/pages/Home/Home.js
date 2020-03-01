import React from "react";
import {
    HeaderText, 
    SubHeaderText, 
    LinkButton, 
    PageContainer, 
    LeftContainer, 
    RightContainer
} from "components/components";
import styled from "styled-components";
import headshot from "images/headshot.png"

const Home = () => {
    return(
        <PageContainer>
            <LeftContainer>
                <HeaderText>Hello, I am Sean!</HeaderText>
                <SubHeaderText>Software Engineer, Front End Web Developer, Jazz Musician </SubHeaderText>
                <LinkButton route="/contact" title="Contact Me"/>
            </LeftContainer>
            <RightContainer>
                <HeadshotImage src={headshot} alt="headshot"/>
            </RightContainer>
        </PageContainer>
    )
};

const HeadshotImage = styled.img`
    width : 300px;
    border-radius : 30%;
`

export default Home;