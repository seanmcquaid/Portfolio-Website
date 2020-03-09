import React, {useState, useEffect} from "react";
import {PageContainer, ParagraphText, HeaderText, LeftContainer, RightContainer, Headshot, LoadingSpinner} from "components/components";
import trumpetHeadshot from "images/trumpetHeadshot.jpg";
import Aux from "hoc/Aux/Aux";

const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <PageContainer>
            {isLoading ? 
            <LoadingSpinner isLoading={isLoading}/> : 
            <Aux>
                <LeftContainer>
                    <HeaderText>About</HeaderText>
                    <ParagraphText>
                        - Initial Background music - wanted to find a day job that allowed me to utilize my creative problem solving skill
                        - Discovered development on my own - saw that friend who was a musician became a dev at google
                        - Found FCC - started self teaching
                        - Decided to enroll in DigitalCrafts
                        - Landed my role at Chick fil a where I am over the moon! 
                    </ParagraphText>
                    <ParagraphText>
                        - I continue to self teach and study, some of the most recent things I have picked up skill wise have been AWS, React Native, learning nuances of react and learning how to write better and more easily testable code
                        - Tie in current role in goal of experiencing different areas of the org to become a more informed architect
                        - Aim to utilize my creative problem skills from being a professional jazz musician into my programming
                        - Ultimately want to be a Software Architect where I can make decisions that can affect an entire organization
                    </ParagraphText>
                </LeftContainer>
                <RightContainer>
                    <Headshot src={trumpetHeadshot} alt="trumpetHeadshot"/>
                </RightContainer>
            </Aux>}
        </PageContainer>
    );
};

export default About;