import React from 'react';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ isLoading }) => (
  <LoadingSpinnerContainer data-testid="loadingSpinner" id="loadingSpinner">
    <ScaleLoader size={1000} color={'#ffffffb6'} loading={isLoading} />
  </LoadingSpinnerContainer>
);

const LoadingSpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

LoadingSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

LoadingSpinner.defaultProps = {
  isLoading: false,
};

export default LoadingSpinner;
