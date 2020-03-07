import React from "react";
import {ScaleLoader} from "react-spinners";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const override = css`
    display : flex;
    justify-content : center;
    align-items : center;
`;

const LoadingSpinner = ({isLoading}) => (
    <ScaleLoader 
        css={override} 
        size={1000} 
        color={"#00000096"} 
        loading={isLoading}
    />
);

LoadingSpinner.propTypes = {
    isLoading : PropTypes.bool.isRequired,
};

LoadingSpinner.defaultProps = {
    isLoading : false,
};

export default LoadingSpinner;