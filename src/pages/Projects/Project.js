import React from 'react';
import styled from 'styled-components';
import { ParagraphText, ExternalLinkButton } from 'components';
import PropTypes from 'prop-types';

const Project = ({
  title,
  image,
  description,
  repoLink,
  projectId,
  demoLink,
}) => (
  <ProjectContainer
    id={'projectInfo' + projectId}
    data-testid={'projectInfo' + projectId}
  >
    <ProjectTitle
      id={'projectTitle' + projectId}
      data-testid={'projectTitle' + projectId}
    >
      {title}
    </ProjectTitle>
    <ProjectImage
      src={image}
      alt={title}
      id={'projectImage' + projectId}
      data-testid={'projectImage' + projectId}
    />
    <ParagraphText
      id={'projectDescription' + projectId}
      data-testid={'projectDescription' + projectId}
    >
      {description}
    </ParagraphText>
    <ButtonsContainer>
      <ExternalLinkButton
        href={repoLink}
        target="blank"
        id={'projectRepoButton' + projectId}
        data-testid={'projectRepoButton' + projectId}
        title={`${title} GitHub Repo Link`}
      >
        GitHub Repo
      </ExternalLinkButton>
      {demoLink ? (
        <ExternalLinkButton href={demoLink} target="blank">
          Live Demo
        </ExternalLinkButton>
      ) : null}
    </ButtonsContainer>
  </ProjectContainer>
);

const ProjectContainer = styled.li`
  border: 2px solid #00000096;
  margin: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 26rem;
  height: 28rem;
  @media (max-width: 975px) {
    margin: 1rem 0;
    border: none;
  }
`;

const ProjectTitle = styled.label`
  font-size: 1.25rem;
  color: white;
  padding: 0.25rem;
`;

const ProjectImage = styled.img`
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  max-width: 300px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
  demoLink: PropTypes.string,
};

export default Project;
