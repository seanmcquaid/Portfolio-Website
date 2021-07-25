import React from 'react';
import { H1 } from 'components';
import styled, { keyframes } from 'styled-components';
import projectsList from './projectsList';
import Project from './Project';

const Projects = () => (
  <ProjectsPageContainer id="projectsPage" data-testid="projectsPage">
    <Header id="projectsPageHeader" data-testid="projectsPageHeader">
      <H1>Featured Projects</H1>
    </Header>
    <Main>
      <ProjectsList id="projectsList" data-testid="projectsList">
        {projectsList.map(
          ({ title, image, description, repoLink, demoLink }, i) => (
            <Project
              key={i}
              title={title}
              image={image}
              description={description}
              repoLink={repoLink}
              projectId={i}
              demoLink={demoLink}
            />
          )
        )}
      </ProjectsList>
    </Main>
  </ProjectsPageContainer>
);

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const ProjectsPageContainer = styled.div`
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
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProjectsList = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  list-style: none;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  overflow: auto;
  max-height: 32rem;
  @media (max-width: 975px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    overflow: visible;
  }
`;

export default Projects;
