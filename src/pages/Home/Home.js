import React from "react";
import {
    HeaderText, 
    SubHeaderText, 
    LinkButton, 
    PageContainer, 
    LeftContainer, 
    RightContainer,
    Headshot
} from "components/components";
import headshot from "images/headshot.jpg"

const Home = () => (
    <PageContainer>
        <LeftContainer>
            <HeaderText>Hello, I am Sean!</HeaderText>
            <SubHeaderText>Software Engineer, Front End Web Developer, Jazz Musician </SubHeaderText>
            <LinkButton route="/contact" title="Contact Me"/>
        </LeftContainer>
        <RightContainer>
            <Headshot src={headshot} alt="headshot"/>
        </RightContainer>
    </PageContainer>
);

export default Home;