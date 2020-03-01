import React from "react";
import {HeaderText, SubHeaderText, LinkButton, PageContainer, LeftContainer, RightContainer} from "components/components";

const Home = () => {
    return(
        <PageContainer>
            <LeftContainer>
                <HeaderText>Hello I am Sean</HeaderText>
                <SubHeaderText>Front End Web Developer, Musician and Software Engineer</SubHeaderText>
                <LinkButton route="/contact" title="Contact Me"/>
            </LeftContainer>
            <RightContainer>
                Logo here
            </RightContainer>
        </PageContainer>
    )
};

export default Home;