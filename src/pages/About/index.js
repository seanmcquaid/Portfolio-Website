import React from 'react';
import { ParagraphText, HeaderText, Headshot } from 'components';
import trumpetHeadshot from 'images/trumpetHeadshot.jp2';
import styled, { keyframes } from 'styled-components';

const About = () => {
  return (
    <AboutPageContainer id="aboutPage" data-testid="aboutPage">
      <Header>
        <HeaderText id="aboutPageHeader" data-testid="aboutPageHeader">
          About Me
        </HeaderText>
      </Header>
      <Main>
        <Headshot
          src={trumpetHeadshot}
          alt="trumpetHeadshot"
          id="bioHeadshot"
          data-testid="bioHeadshot"
        />
        <Article>
          <ParagraphText id="bioParagraphOne" data-testid="bioParagraphOne">
            Originally from New York, I moved to Atlanta roughly three years
            ago. My professional background is in music and now, Software
            Engineering. I have been playing the trumpet for over 20 years and
            have a Bachelor’s and Master’s degree in Music. After I moved to
            Atlanta, I quickly realized that I wanted a day job that would allow
            me to utilize my creative problem solving skills from music.
          </ParagraphText>
          <ParagraphText id="bioParagraphTwo" data-testid="bioParagraphTwo">
            I accidentally discovered programming one night while scrolling on
            Facebook and seeing that a musician friend of mine from high school
            recently landed a job at Google. Upon investigating more and seeing
            that his job title was a Software Engineer, I quickly came to
            understand why he decided to pursue programming. That night was when
            I wrote my first lines of HTML/CSS and I have loved it ever since!
            After six months of self studying, I decided to enroll in
            DigitalCrafts, a coding bootcamp based in Atlanta. Shortly after
            graduating, I was lucky enough to land my current role at
            Chick-fil-A and I am LOVING IT!
          </ParagraphText>
          <ParagraphText id="bioParagraphThree" data-testid="bioParagraphThree">
            My ultimate career goal is to be a Software Architect and make
            enterprise wide technical decisions that will help everyone in the
            company. However, I would like to transition to different areas of
            development along the way to become a more well versed and informed
            Software Engineer. I truly believe that having a wider perspective
            will inevitably lead to me making better and more beneficial
            decisions for the organization that I serve.
          </ParagraphText>
        </Article>
      </Main>
    </AboutPageContainer>
  );
};

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.5s;
  animation: ${fadeInAnimation} ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    justify-content: flex-start;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 975px) {
    flex-direction: column;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 36rem;
  flex: 1;
  padding: 1rem;
`;

export default About;
