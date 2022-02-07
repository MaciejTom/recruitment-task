//Hook
import useGifFetch from "../../hooks/useGifFetch";
//Router
import { useParams } from "react-router-dom";
//Components
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
//Styles
import {
  Wrapper,
  Gif,
  RatingDiv,
  Star,
  Rating,
  Button,
} from "./GifPage.styles";
//Image
import star from "../../images/star.png";

const GifPage = () => {
  const { id } = useParams();

  const { gif: {data}, loading, error } = useGifFetch(id);

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Gif src={data.images.downsized_large.url} alt={data.title} height="500px" width='500px' />
      <RatingDiv>
        <Star src={star} height='100px' width='100px'/>
        <Rating>{data.rating.toUpperCase()}</Rating>
      </RatingDiv>
      <Button to="/">Home</Button>
    </Wrapper>
  );
};

export default GifPage;
