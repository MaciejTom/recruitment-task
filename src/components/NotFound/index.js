import React from "react";

//Routing
import { Link } from "react-router-dom";

//Styles
import { Wrapper, Content } from "./NotFound.styles";

const NotFoundComponent = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Page not found :(</h1>

          <Link to="/">HOME</Link>
      
      </Content>
    </Wrapper>
  );
};

export default NotFoundComponent;
