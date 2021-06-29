import React from 'react';
import { H1, P } from 'components';
import styled, { keyframes } from 'styled-components';
import skillsList from './skillsList';
import Skill from './Skill';

const Skills = () => (
  <SkillsPageContainer id="skillsPage" data-testid="skillsPage">
    <Header>
      <H1 id="skillsPageHeader" data-testid="skillsPageHeader">
        Skills
      </H1>
      <P>
        I currently work with Java and SpringBoot at work, however, my
        speciality is in Full-Stack JavaScript development. I specifically have
        a passion for creating visually appealing, accessible web applications
        that solve a specific business problem. I currently spend most of my
        time outside of work attempting to come up with creative solutions with
        any flavor of JavaScript. I specifically have a passion for Front End
        Web Development!
      </P>
    </Header>
    <Main>
      <SkillsList id="skillsList" data-testid="skillsList">
        {skillsList.map(({ name, IconComponent }, i) => (
          <Skill key={i} IconComponent={IconComponent} name={name} />
        ))}
      </SkillsList>
    </Main>
  </SkillsPageContainer>
);

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const SkillsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: 0.5s;
  animation: ${fadeInAnimation} ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (max-width: 975px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 34rem;
  padding: 1rem;
  @media (max-width: 975px) {
    align-items: center;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 26rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default Skills;
