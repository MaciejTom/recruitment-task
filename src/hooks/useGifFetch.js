import { useState, useEffect } from "react";

//Api functions
import { fetchGIF } from "../API";

const useGifFetch = (gifID) => {
  const [gif, setGif] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {

      try {
        setLoading(true);
        setError(false);
        const {data} = await fetchGIF(gifID);

        setGif({
          data
        });
        setLoading(false);
      } catch (e) {
        setError(true);
      }      
    };

    fetchMovie(gifID);
  }, [gifID]);
  return { gif, loading, error };
};

export default useGifFetch;
