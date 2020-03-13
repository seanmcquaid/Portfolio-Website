import React, {useEffect, useState} from "react";
import { HeaderText, LoadingSpinner, Project } from "components/components";
import styled from "styled-components";
import Aux from "hoc/Aux/Aux";
import projectsList from "./projectsList";

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <ProjectPageContainer>
            {isLoading ?
                <LoadingSpinner isLoading={isLoading}/> :
                <Aux>
                    <HeaderText>Projects</HeaderText>
                    <ProjectsContainer>
                        {projectsList.map((project, i) =>
                            <Project 
                                key={i} 
                                title={project.title} 
                                image={project.image} 
                                description={project.description} 
                                repoLink={project.repoLink}
                            />)}
                    </ProjectsContainer>
                </Aux>}
        </ProjectPageContainer>
    );
};

const ProjectPageContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    align-self : center;
    height : 100vh;
    width : 100vw;
    min-height : 100vh;
    width : 100vw;
    @media (max-width : 915px){
        margin : auto;
    }
`;

const ProjectsContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : center;
    width : 100%;
    max-width : 800px;
    height : 100%;
    max-height : 1000px;
    @media(max-width : 915px){
        flex-direction : column;
    }
`;

export default Projects;