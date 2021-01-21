import React from 'react';
import { HeaderText, ParagraphText } from 'components';
import styled from 'styled-components';
import skillsList from './skillsList';
import Skill from './Skill';

const Skills = () => (
  <SkillsPageContainer id="skillsPage" data-testid="skillsPage">
    <Header>
      <HeaderText id="skillsPageHeader" data-testid="skillsPageHeader">
        Skills
      </HeaderText>
      <ParagraphText>
        I currently work with Java/Springboot at work, however, my speciality is
        in Full-Stack JavaScript development. I specifically have a passion for
        creating visually appealing applications that solve a specific business
        problem. I currently spend most of my time outside of work attempting to
        come up with creative solutions in React and React Native.
      </ParagraphText>
    </Header>
    <Main>
      <SkillsList id="skillsList" data-testid="skillsList">
        {skillsList.map((skill, i) => {
          const { name, IconComponent } = skill;
          return <Skill key={i} IconComponent={IconComponent} name={name} />;
        })}
      </SkillsList>
    </Main>
  </SkillsPageContainer>
);

const SkillsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
