import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    return(
        <HomeContainer>
            <div>
                <h1>Hello I am Sean</h1>
                <h2>Front End Web Developer, Musician and Software Engineer</h2>
                <Link></Link>
            </div>
            <div>
                Logo here
            </div>
        </HomeContainer>
    )
};

const HomeContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : row;
`;

export default Home;