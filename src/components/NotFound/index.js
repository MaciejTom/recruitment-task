//Styles
import { Wrapper, Content, Button } from "./NotFound.styles";

const NotFoundComponent = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Page not found :(</h1>
          <Button to="/">HOME</Button>      
      </Content>
    </Wrapper>
  );
};

export default NotFoundComponent;
