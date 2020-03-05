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
    width : 40%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    max-width: 300px;
    margin : 1rem;
    animation: ${fadeInAnimation} ease 2s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    
`;