import React, { useState, useEffect } from 'react';
import {
  ParagraphText,
  HeaderText,
  Headshot,
  LoadingSpinner,
} from 'components/components';
import trumpetHeadshot from 'images/trumpetHeadshot.jpg';
import styled, { keyframes } from 'styled-components';

const About = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AboutPageContainer id='aboutPage' data-testid='aboutPage'>
      {isLoading ? (
        <LoadingSpinner isLoading={isLoading} />
      ) : (
        <>
          <LeftContainer>
            <HeaderText id='aboutPageHeader' data-testid='aboutPageHeader'>
              About
            </HeaderText>
            <ParagraphText id='bioParagraphOne' data-testid='bioParagraphOne'>
              Originally from New York, I moved to Atlanta roughly three years
              ago. My professional background is in music and now, Software
              Engineering. I have been playing the trumpet for over 20 years and
              have a Bachelor’s and Master’s degree in Music. After I moved to
              Atlanta, I quickly realized that I wanted a day job that would
              allow me to utilize my creative problem solving skills from music.
            </ParagraphText>
            <ParagraphText id='bioParagraphTwo' data-testid='bioParagraphTwo'>
              I accidentally discovered programming one night while scrolling on
              Facebook and seeing that a musician friend of mine from high
              school recently landed a job at Google. Upon investigating more
              and seeing that his job title was a Software Engineer, I quickly
              came to understand why he decided to pursue programming. That
              night was when I wrote my first lines of HTML/CSS and I have loved
              it ever since! After six months of self studying, I decided to
              enroll in DigitalCrafts, a coding bootcamp based in Atlanta.
              Shortly after graduating, I was lucky enough to land my current
              role at Chick-fil-A and I am LOVING IT!
            </ParagraphText>
            <ParagraphText
              id='bioParagraphThree'
              data-testid='bioParagraphThree'
            >
              My ultimate career goal is to be a Software Architect and make
              enterprise wide technical decisions that will help everyone in the
              company. However, I would like to transition to different areas of
              development along the way to become a more well versed and
              informed Software Engineer. I truly believe that having a wider
              perspective will inevitably lead to me making better and more
              beneficial decisions for the organization that I serve.
            </ParagraphText>
          </LeftContainer>
          <RightContainer>
            <Headshot
              src={trumpetHeadshot}
              alt='trumpetHeadshot'
              id='bioHeadshot'
              data-testid='bioHeadshot'
            />
          </RightContainer>
        </>
      )}
    </AboutPageContainer>
  );
};

const AboutPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 975px) {
    flex-direction: column-reverse;
    margin: 1rem;
  }
  @media (max-width: 520px) {
    margin: 1rem;
  }
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  max-width: 550px;
  margin: 0 1rem;
  animation: ${fadeInAnimation} ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 100%;
    margin: 1rem 0;
  }
  @media (max-width: 520px) {
    max-height: 100%;
    max-width: 100%;
    margin: 1rem 0;
  }
`;

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  animation: ${fadeInAnimation} ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    margin: 1rem 0;
    max-width: 100%;
    max-height: 100%;
  }
  @media (max-width: 520px) {
    max-height: 100%;
    max-width: 100%;
    margin: 1rem 0;
  }
`;

export default About;
