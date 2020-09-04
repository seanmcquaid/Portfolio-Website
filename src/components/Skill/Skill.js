import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { FaAccessibleIcon } from "react-icons/fa";

const Skill = ({ IconComponent, name }) => (
  <IconContainer id={`${name}Icon`} data-testid={`${name}Icon`}>
    <IconComponent />
    <IconName>{name}</IconName>
  </IconContainer>
);

const IconName = styled.p`
  margin: 0.25rem;
  font-size: 1rem;
  visibility: hidden;
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  width: 25%;
  margin: 0.75rem;
  &:hover ${IconName} {
    visibility: visible;
    transition: 0.25s;
    animation: ${fadeInAnimation} ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

Skill.propTypes = {
  IconComponent: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Skill.defaultProps = {
  IconComponent: FaAccessibleIcon,
  name: "Placeholder Name",
};

export default Skill;
