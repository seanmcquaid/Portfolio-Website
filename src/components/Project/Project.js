import React from "react";
import styled from "styled-components";
import { ParagraphText } from "components/components";

const Project = ({title, image, description}) => {
    return (
        <ProjectContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectImage src={image} alt={title}/>
            <ParagraphText>{description}</ParagraphText>
        </ProjectContainer>
    )
};

const ProjectContainer = styled.div`
`;

const ProjectTitle = styled.h4`
`;

const ProjectImage = styled.img`
`;

export default Project;