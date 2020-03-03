import styled, {keyframes} from "styled-components";

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

export default styled.div`
    width : 80%;
    max-width: 550px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 1rem;
    animation: ${fadeInAnimation} ease 3s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
`;