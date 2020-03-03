import React from "react";
import {ScaleLoader} from "react-spinners";
import { css } from "@emotion/core";

const override = css`
    display : flex;
    justify-content : center;
    align-items : center;
`;

const LoadingSpinner = props => {
    const {isLoading} = props;

    return (
        <ScaleLoader css={override} size={1000} color={"#00000096"} loading={isLoading}/>
    )
};

export default LoadingSpinner;