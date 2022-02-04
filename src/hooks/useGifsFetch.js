import { useState, useEffect } from "react";

//Api functions
import { fetchGIFs } from "../API";

const useGifsFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [GIFs, setGIFs] = useState([]);

  const fetchData = async (searchTerm) => {
    try {
      setError(false);
      setLoading(true);

      const response = await fetchGIFs(searchTerm);
      setGIFs(response.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setGIFs([]);

    fetchData(searchTerm);
  }, [searchTerm]);

  return { GIFs, loading, error, setSearchTerm, searchTerm };
};

export default useGifsFetch;
