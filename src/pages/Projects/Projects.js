import React, {useEffect, useState} from "react";
import { HeaderText, LoadingSpinner, Project } from "components/components";
import styled, {keyframes} from "styled-components";
import Aux from "hoc/Aux/Aux";
import projectsList from "./projectsList";

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <ProjectsPageContainer id="projectsPage" data-testid="projectsPage">
            {isLoading ?
                <LoadingSpinner isLoading={isLoading}/> :
                <Aux>
                    <ProjectsPageHeader id="projectsPageHeader" data-testid="projectsPageHeader">Projects</ProjectsPageHeader>
                    <ProjectsContainer id="projectsList" data-testid="projectsList">
                        {projectsList.map((project, i) =>
                            <Project 
                                key={i} 
                                title={project.title} 
                                image={project.image} 
                                description={project.description} 
                                repoLink={project.repoLink}
                                projectId={i}
                            />)}
                    </ProjectsContainer>
                </Aux>}
        </ProjectsPageContainer>
    );
};

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const ProjectsPageContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 100%;
    @media (max-width : 975px){
        margin : auto;
    }
`;

const ProjectsPageHeader = styled(HeaderText)`
    animation: ${fadeInAnimation} ease 1s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
`;

const ProjectsContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    flex-wrap : wrap;
    flex : 1;
    margin-top : 1rem;
    width : 100%;
    height : 100%;
    overflow : scroll;
    justify-content : center;
    animation: ${fadeInAnimation} ease 2s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    @media(max-width : 975px){
        flex-direction : column;
        margin : 1rem;
    }
    @media (max-width : 520px){
        margin : 0;
    }
`;

export default Projects;