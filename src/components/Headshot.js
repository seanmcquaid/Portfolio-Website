import styled from 'styled-components';

export default styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  margin: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  @media (max-width: 975px) {
    max-width: 220px;
  }
`;
