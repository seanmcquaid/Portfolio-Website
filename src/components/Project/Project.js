import React from "react";
import styled from "styled-components";
import { ParagraphText, ExternalLinkButton } from "components/components";

const Project = ({title, image, description, repoLink}) => {
    return (
        <ProjectContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectImage src={image} alt={title}/>
            <ParagraphText>{description}</ParagraphText>
            <ButtonsContainer>
                <ExternalLinkButton href={repoLink} target="blank">Github</ExternalLinkButton>
            </ButtonsContainer>
        </ProjectContainer>
    )
};

const ProjectContainer = styled.div`
    border : 2px solid #00000096;
    margin : 1rem;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
    max-width : 400px;
    height : 600px;
`;

const ProjectTitle = styled.h4`
    font-size : 1.25rem;
`;

const ProjectImage = styled.img`
    border : 2px solid #00000096;
    margin : 1rem;
    width : 100%;
    max-width : 300px;
    height : 200px;
`;

const ButtonsContainer = styled.div`
    margin : 1rem;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    width : 100%;
    max-width : 100px;
`;

export default Project;