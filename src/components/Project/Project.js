import React from "react";
import styled from "styled-components";
import { ParagraphText, ExternalLinkButton } from "components/components";
import PropTypes from "prop-types";

const Project = ({title, image, description, repoLink, projectId}) => (
    <ProjectContainer id={"projectInfo" + projectId} data-testid={"projectInfo" + projectId}>
        <ProjectTitle id={"projectTitle" + projectId} data-testid={"projectTitle" + projectId}>{title}</ProjectTitle>
        <ProjectImage src={image} alt={title} id={"projectImage" + projectId} data-testid={"projectImage" + projectId}/>
        <ParagraphText id={"projectDescription" + projectId} data-testid={"projectDescription" + projectId}>{description}</ParagraphText>
        <ButtonsContainer>
            <ExternalLinkButton href={repoLink} target="blank" id={"projectRepoButton" + projectId} data-testid={"projectRepoButton" + projectId}>
                Github
            </ExternalLinkButton>
        </ButtonsContainer>
    </ProjectContainer>
);

const ProjectContainer = styled.div`
    border : 2px solid #00000096;
    margin : 1rem;
    padding : 1rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    max-width : 400px;
    max-height : 600px;
    @media(max-width : 520px){
        border : none;
        padding : 0;
        margin : 1rem 0;
    }
`;

const ProjectTitle = styled.h4`
    font-size : 1.25rem;
    color : white;
`;

const ProjectImage = styled.img`
    border-radius : 5px;
    box-shadow : 0px 0px 20px rgba(0,0,0,.4);
    max-width : 300px;
    height : 200px;
`;

const ButtonsContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    max-width : 100px;
`;

Project.propTypes = {
    title : PropTypes.string.isRequired, 
    image : PropTypes.string.isRequired, 
    description : PropTypes.string.isRequired, 
    repoLink : PropTypes.string.isRequired,
    projectId : PropTypes.number.isRequired,
};

Project.defaultProps = {
    title : "Project Here", 
    image : "Placeholder Image", 
    description : "Placeholder description", 
    repoLink : "www.google.com",
};


export default Project;