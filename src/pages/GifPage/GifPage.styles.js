import styled from "styled-components";
import { Link } from "react-router-dom";

export const Gif = styled.img`
  object-fit: contain;
  border-radius: 5px;
  width: 100%;
  max-height: 500px;
`;
export const Button = styled(Link)`
  text-decoration: none;
  color: black;
  background: white;
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 0.4em 1em;
`;

export const Wrapper = styled.main`
  max-width: var(--maxWidth);
  margin: 0 auto;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  padding: 4rem 1rem;  
  }
`;
export const RatingDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const Star = styled.img`
  max-width: 100px;
`;
export const Rating = styled.span`
  font-weight: 700;
  font-size: 3rem;
`;
