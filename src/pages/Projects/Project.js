import React from 'react';
import styled from 'styled-components';
import { ParagraphText, ExternalLinkButton } from 'components/components';
import PropTypes from 'prop-types';

const Project = ({ title, image, description, repoLink, projectId }) => (
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
    <ExternalLinkButton
      href={repoLink}
      target="blank"
      id={'projectRepoButton' + projectId}
      data-testid={'projectRepoButton' + projectId}
      title={`${title} GitHub Repo Link`}
    >
      GitHub Repo
    </ExternalLinkButton>
  </ProjectContainer>
);

const ProjectContainer = styled.li`
  border: 2px solid #00000096;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 26rem;
  height: 28rem;
  @media (max-width: 975px) {
    margin: 1rem 0;
    padding: 1rem 0;
  }
`;

const ProjectTitle = styled.label`
  font-size: 1.25rem;
  color: white;
  padding: 0.5rem;
`;

const ProjectImage = styled.img`
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  max-width: 300px;
`;

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};

Project.defaultProps = {
  title: 'Project Here',
  image: 'Placeholder Image',
  description: 'Placeholder description',
  repoLink: 'www.google.com',
};

export default Project;
