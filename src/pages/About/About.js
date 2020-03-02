import React, {useState, useEffect} from "react";
import {PageContainer, ParagraphText, HeaderText, LeftContainer, RightContainer, Headshot, LoadingSpinner} from "components/components";
import trumpetHeadshot from "images/trumpetHeadshot.jpg";
import Aux from "hoc/Aux/Aux";

const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    },[]);

    return(
        <PageContainer>
            {isLoading ? 
            <LoadingSpinner isLoading={isLoading}/> : 
            <Aux>
                <LeftContainer>
                    <HeaderText>About</HeaderText>
                    <ParagraphText>Text about me</ParagraphText>
                </LeftContainer>
                <RightContainer>
                    <Headshot src={trumpetHeadshot} alt="trumpetHeadshot"/>
                </RightContainer>
            </Aux>}
        </PageContainer>
    )
};

export default About;