import React from "react";
import {ScaleLoader} from "react-spinners";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const override = css`
    position : absolute;
    top : 50%;
    left : 50%;
`;

const LoadingSpinner = ({isLoading}) => (
    <ScaleLoader 
        css={override} 
        size={1000} 
        color={"#ffffffb6"} 
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