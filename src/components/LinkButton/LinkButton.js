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
`;

export default LinkButton;