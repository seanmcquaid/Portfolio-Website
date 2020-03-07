import styled from "styled-components";

export default styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    align-self : center;
    @media (max-width : 915px){
        flex-direction : column-reverse;
        margin-top : 10rem;
    }
`;