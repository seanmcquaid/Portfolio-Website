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
    width : 100%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    max-width: 300px;
    margin : 1rem;
    animation: ${fadeInAnimation} ease 1s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
`;