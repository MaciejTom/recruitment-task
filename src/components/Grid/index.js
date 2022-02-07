//Components
import Spinner from "../Spinner";
import Error from "../Error";
import GifElement from '../GifElement'
//Styles
import { Wrapper, Content } from "./Grid.style";

const Grid = ({ GIFs, error, loading }) => {

   if (error) {
    return <Error/>;
  }
  if (loading) {
    
    return <Spinner/>;
  }
  
  
  return (
    <Wrapper>      
      <Content>{GIFs.map(gif => <GifElement key={gif.id} {...gif}/>)}</Content>
    </Wrapper>
  );
};

export default Grid;
