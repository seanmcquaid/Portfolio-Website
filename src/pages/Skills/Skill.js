import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FaAccessibleIcon } from 'react-icons/fa';

const Skill = ({ IconComponent, name }) => (
  <IconContainer id={`${name}Icon`} data-testid={`${name}Icon`}>
    <IconComponent aria-label={`${name} Icon`} />
    <IconName>{name}</IconName>
  </IconContainer>
);

const IconName = styled.label`
  margin: 0.25rem;
  font-size: 1rem;
  visibility: hidden;
  @media (max-width: 975px) {
    visibility: visible;
  }
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const IconContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 4rem;
  margin: 0.75rem;
  @media (min-width: 975px) {
    &:hover ${IconName} {
      visibility: visible;
      transition: 0.25s;
      animation: ${fadeInAnimation} ease 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }
`;

Skill.propTypes = {
  IconComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Skill.defaultProps = {
  IconComponent: FaAccessibleIcon,
  name: 'Placeholder Name',
};

export default Skill;
