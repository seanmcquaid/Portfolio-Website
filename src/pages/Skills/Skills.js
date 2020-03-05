import React, {useState, useEffect} from "react";
import { HeaderText, PageContainer, LeftContainer, RightContainer, ParagraphText, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";
import styled, {keyframes} from "styled-components";
import skillsList from "./skillsList";

const Skills = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    },[]);

    return(
        <PageContainer>
            {isLoading ?
                <LoadingSpinner isLoading={isLoading}/> :
                <Aux>
                    <LeftContainer>
                        <HeaderText>Skills</HeaderText>
                        <ParagraphText>I currently utilize in Java/Springboot at work, however, my speciality is in full-stack JavaScript development. I specifically have a passion for creating visually appealing, responsive applications. I currently spend most of my time outside of work learning new concepts and creating creative solutions in React and React Native.</ParagraphText>
                    </LeftContainer>
                    <RightContainer>
                        <IconsContainer>
                            {skillsList.map(skill => {
                                const {name, Component} = skill;
                                return (
                                    <IconContainer>
                                        <Component/>
                                        <IconName>{name}</IconName>
                                    </IconContainer>
                                )
                            })}
                        </IconsContainer>
                    </RightContainer>
                </Aux>
            }
        </PageContainer>
    )
};

const IconsContainer = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    flex : 1;
    justify-content : center;
    align-items : center;
    width : 100%;
`;

const IconName = styled.p`
    margin : 0.25rem;
    font-size : 1rem;
    visibility : hidden;
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const IconContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-size : 2rem;
    width : 25%;
    margin : 0.75rem;
    &:hover ${IconName} {
        visibility : visible;
        transition : 0.25s;
        animation: ${fadeInAnimation} ease 1s; 
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
      }
`;

export default Skills;