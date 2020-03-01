import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const LinkButton = ({title, route}) => {
    return(
        <LinkButtonContainer to={route}>
            {title}
        </LinkButtonContainer>
    )
};

const LinkButtonContainer = styled(Link)`
    text-decoration : none;
    color : #544B3D;
    border : 2px solid #544B3D;
    padding : 1rem;
    margin : 1rem;
    font-size : 1rem;
    &:hover {
        transition : 0.5s;
        background-color : #544B3D;
        color: #4C8577;
      }
`;

export default LinkButton;