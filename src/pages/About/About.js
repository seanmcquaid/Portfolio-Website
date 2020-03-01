import React from "react";
import {PageContainer, ParagraphText, HeaderText, LeftContainer, RightContainer} from "components/components";

const About = () => {
    return(
        <PageContainer>
            <LeftContainer>
                <HeaderText>About</HeaderText>
                <ParagraphText>Text about me</ParagraphText>
            </LeftContainer>
            <RightContainer>
                Picture here
            </RightContainer>
        </PageContainer>
    )
};

export default About;