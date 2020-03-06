import React, {useEffect, useState} from "react";
import { HeaderText, LoadingSpinner, Project } from "components/components";
import styled from "styled-components";
import Aux from "hoc/Aux/Aux";
import projectsList from "./projectsList";

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    },[]);

    return(
        <ProjectPageContainer>
            {isLoading ?
                <LoadingSpinner isLoading={isLoading}/> :
                <Aux>
                    <HeaderText>Projects</HeaderText>
                    <ProjectsContainer>
                        {projectsList.map(project => <Project title={project.title} image={project.image} description={project.description}/>)}
                    </ProjectsContainer>
                </Aux>
            }
        </ProjectPageContainer>
    )
};

const ProjectPageContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    margin : 0 auto;
    width : 100%;
    height : 100%;
`;

const ProjectsContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
`;

export default Projects;