import React from "react";
import {Link} from "react-router-dom"

const GifElement = (props) => {
  
  return (
    <>
           <img src={props.images.downsized.url} width="250" height="200" alt="GIF by Soul Train"/>
    </>
  );
};

export default GifElement;
