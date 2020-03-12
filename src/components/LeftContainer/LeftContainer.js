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
    max-width: 550px;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : flex-start;
    animation: ${fadeInAnimation} ease 2s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    @media(max-width : 915px){
        justify-content : center;
        align-items : center
    }
`;