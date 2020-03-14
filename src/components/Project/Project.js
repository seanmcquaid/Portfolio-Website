import React from "react";
import styled from "styled-components";
import { ParagraphText, ExternalLinkButton } from "components/components";
import PropTypes from "prop-types";

const Project = ({title, image, description, repoLink}) => (
    <ProjectContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectImage src={image} alt={title}/>
        <ParagraphText>{description}</ParagraphText>
        <ButtonsContainer>
            <ExternalLinkButton href={repoLink} target="blank">Github</ExternalLinkButton>
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
};

Project.defaultProps = {
    title : "Project Here", 
    image : "Placeholder Image", 
    description : "Placeholder description", 
    repoLink : "www.google.com",
};


export default Project;