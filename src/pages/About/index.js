import React from 'react';
import { P, H1, Headshot } from 'components';
import trumpetHeadshot from 'images/trumpetHeadshot.jp2';
import styled, { keyframes } from 'styled-components';

const About = () => (
  <AboutPageContainer id="aboutPage" data-testid="aboutPage">
    <Header>
      <H1 id="aboutPageHeader" data-testid="aboutPageHeader">
        About Me
      </H1>
    </Header>
    <Main>
      <Headshot
        src={trumpetHeadshot}
        alt="trumpetHeadshot"
        id="bioHeadshot"
        data-testid="bioHeadshot"
      />
      <Article>
        <P id="bioParagraphOne" data-testid="bioParagraphOne">
          Originally from New York, I moved to Atlanta roughly three years ago.
          My professional background is in music and now, Software Engineering.
          I have been playing the trumpet for over 20 years and have a
          Bachelor’s and Master’s degree in Music. After I moved to Atlanta, I
          quickly realized that I wanted a day job that would allow me to
          utilize my creative problem solving skills from music.
        </P>
        <P id="bioParagraphTwo" data-testid="bioParagraphTwo">
          I accidentally discovered programming one night while scrolling on
          Facebook and seeing that a musician friend of mine from high school
          recently landed a job at Google. Upon investigating more and seeing
          that his job title was a Software Engineer, I quickly came to
          understand why he decided to pursue programming. That night was when I
          wrote my first lines of HTML/CSS and I have loved it ever since! After
          six months of self studying, I decided to enroll in DigitalCrafts, a
          coding bootcamp based in Atlanta. Shortly after graduating, I was
          lucky enough to land my first Software Engineering role at Chick-fil-A
          where I worked on various parts of the CFAOne App. I am currently
          serving as a React developer on our Personal Web Ordering project
          which is being used as our online ordering platform for both domestic
          and international restaurants!
        </P>
        <P id="bioParagraphThree" data-testid="bioParagraphThree">
          It's very important to me that I continue to grow my skills and learn
          different specializations within Software Engineering so I can be a
          well informed engineer. My ultimate career goal is to be a Software
          Architect and make enterprise wide technical decisions that will help
          everyone in the company. I truly believe that having a wider
          perspective will inevitably lead to me making better decisions for the
          organization that I have the privelege to serve.
        </P>
      </Article>
    </Main>
  </AboutPageContainer>
);

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
  padding: 0.5rem;
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
`;

export default About;
