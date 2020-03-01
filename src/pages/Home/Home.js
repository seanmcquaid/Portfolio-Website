import React from "react";
import styled from "styled-components";
import {HeaderText, SubHeaderText, LinkButton} from "components/components";

const Home = () => {
    return(
        <HomeContainer>
            <LeftContainer>
                <HeaderText>Hello I am Sean</HeaderText>
                <SubHeaderText>Front End Web Developer, Musician and Software Engineer</SubHeaderText>
                <LinkButton route="/contact" title="Contact Me"/>
            </LeftContainer>
            <RightContainer>
                Logo here
            </RightContainer>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
`;

const LeftContainer = styled.div`
    width : 50%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

const RightContainer = styled.div`
    width : 50%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`;

export default Home;