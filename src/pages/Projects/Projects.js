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
                                projectId={i}
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
    width : 100%;
    @media (max-width : 975px){
        margin : auto;
    }
`;

const ProjectsContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin : 1rem;
    width : 100%;
    justify-content : center;
    @media(max-width : 975px){
        flex-direction : column;
        margin : 1rem;
    }
    @media (max-width : 520px){
        margin : 0;
    }
`;

export default Projects;