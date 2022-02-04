import React from "react";
//Router
import { Link } from "react-router-dom";
//Styles
import { Gif } from "./GifElement.styles";

const GifElement = ({ images, id, title }) => {
  return (
    <>
      <Link to={`/gif/${id}`}>
        <Gif src={images.downsized.url} width="250" height="200" alt={title} />
      </Link>
    </>
  );
};

export default GifElement;
