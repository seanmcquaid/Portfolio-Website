import React, {useState, useEffect} from "react";
import { HeaderText, ParagraphText, LoadingSpinner, Skill } from "components/components";
import Aux from "hoc/Aux/Aux";
import styled, {keyframes} from "styled-components";
import skillsList from "./skillsList";

const Skills = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <SkillsPageContainer>
            {isLoading ?
                <LoadingSpinner isLoading={isLoading}/> :
                <Aux>
                    <LeftContainer>
                        <HeaderText>Skills</HeaderText>
                        <ParagraphText>I currently work with Java/Springboot at work, however, my speciality is in Full-Stack JavaScript development. I specifically have a passion for creating visually appealing applications that solve a specific business problem. I currently spend most of my time outside of work attempting to come up with creative solutions in React and React Native.</ParagraphText>
                    </LeftContainer>
                    <RightContainer>
                        <IconsContainer>
                            {skillsList.map((skill, i) => {
                                const {name, IconComponent} = skill;
                                return (
                                    <Skill 
                                        key={i} 
                                        IconComponent={IconComponent} 
                                        name={name}
                                    />
                                );
                            })}
                        </IconsContainer>
                    </RightContainer>
                </Aux>}
        </SkillsPageContainer>
    );
};

const SkillsPageContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    align-self : center;
    @media (max-width : 975px){
        flex-direction : column;
        margin : auto;
    }
`;

const IconsContainer = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    flex : 1;
    justify-content : center;
    align-items : center;
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const LeftContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    width : 100%;
    height : 100%;
    max-height : 300px;
    max-width : 550px;
    margin : 0 1rem;
    animation: ${fadeInAnimation} ease 2s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    @media(max-width : 975px){
        justify-content : center;
        align-items : center;
        margin : 1rem 0;
    }
    @media (max-width : 520px){
        max-height : 100%;
        max-width : 100%;
    }
`;

const RightContainer = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    max-width : 300px;
    max-height : 300px;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 1rem;
    animation: ${fadeInAnimation} ease 1s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    @media (max-width : 975px){
        margin : 1rem 0;
    }
    @media (max-width : 520px){
        max-height : 100%;
        max-width : 100%;
    }
`;

export default Skills;