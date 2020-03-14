import React, {useState, useEffect} from "react";
import { HeaderText, LeftContainer, RightContainer, ParagraphText, LoadingSpinner, Skill } from "components/components";
import Aux from "hoc/Aux/Aux";
import styled from "styled-components";
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
    @media (max-width : 915px){
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

export default Skills;