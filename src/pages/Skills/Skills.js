import React, {useState, useEffect} from "react";
import { HeaderText, PageContainer, LeftContainer, RightContainer, ParagraphText, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";
import styled from "styled-components";
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
                                        <ParagraphText>{name}</ParagraphText>
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
    flex-direction : flex-wrap;
    justify-content : center;
    align-items : center;
    width : 100%;
    padding : 1rem;
`;

const IconContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    font-size : 1rem;
`;

export default Skills;