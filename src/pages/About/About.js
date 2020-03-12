import React, {useState, useEffect} from "react";
import {ParagraphText, HeaderText, LeftContainer, RightContainer, Headshot, LoadingSpinner} from "components/components";
import trumpetHeadshot from "images/trumpetHeadshot.jpg";
import Aux from "hoc/Aux/Aux";
import styled from "styled-components";

const About = props => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <AboutPageContainer>
            {isLoading ? 
            <LoadingSpinner isLoading={isLoading}/> : 
            <Aux>
                <LeftContainer>
                    <HeaderText>About</HeaderText>
                    <ParagraphText>
                        Originally from New York, I moved to Atlanta roughly three years ago. My professional background is in music and now, software engineering. I have been playing the trumpet for over 20 years and have a Bachelor’s and Master’s degree in Music. After I moved to Atlanta, I quickly realized that I wanted a day job that would allow me to utilize my creative problem solving skills from music.
                    </ParagraphText>
                    <ParagraphText>
                        I accidentally discovered programming one night while scrolling on Facebook and seeing that a musician friend of mine from high school recently landed a job at Google. Upon investigating more and seeing that his job title was a Software Engineer, I quickly came to understand why he decided to pursue programming. That night was when I wrote my first lines of HTML/CSS and I have loved it ever since! After six months of self studying, I decided to enroll in DigitalCrafts, a coding bootcamp based in Atlanta. Shortly after graduating, I was lucky enough to land my current role at Chick-fil-A and I am LOVING IT! 
                    </ParagraphText>
                    <ParagraphText>
                        My ultimate career goal is to be a Software Architect and make enterprise wide technical decisions that will help everyone in the company. However, I would like to transition to different areas of development along the way to become a more well versed and informed software engineer. I truly believe that having a wider perspective will inevitably lead to me making better and more beneficial decisions for the organization that I serve.
                    </ParagraphText>
                </LeftContainer>
                <RightContainer>
                    <Headshot src={trumpetHeadshot} alt="trumpetHeadshot"/>
                </RightContainer>
            </Aux>}
        </AboutPageContainer>
    );
};

const AboutPageContainer = styled.div`
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

export default About;