import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 1.5em 1.3em 0 ;
  margin-bottom: 1.5em;
`;
export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  height: 55px;
  width: 100%;
  background: #ffffff80;
  margin: 0 auto;
  border-radius: 40px;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    
  }
}`

export const Input = styled.input`
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    margin: 0.5em 0;
    padding: 0 0 0 3.75em;
    border: 0;
    width: 95%;
    background: transparent;
    color: grey;
    :focus {
      outline: none;
    }
  }
`;
