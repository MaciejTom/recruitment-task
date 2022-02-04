import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 5em;
  h1 {
    font-size: var(--fontBigger);
    color: var(--medGrey);

    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
  text-decoration: none;
  color: black;
  background: white;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.4em 1em;
`;