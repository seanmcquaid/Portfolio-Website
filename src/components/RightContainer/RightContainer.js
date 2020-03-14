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
    display : flex;
    width : 100%;
    height : 100%;
    max-width : 300px;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 1rem;
    animation: ${fadeInAnimation} ease 1s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
`;