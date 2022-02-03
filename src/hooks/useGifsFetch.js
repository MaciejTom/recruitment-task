import { useState, useEffect } from "react";

//Api functions
import { fetchGIFs } from "../API";

// const initialState = {
//   page: 0,
//   results: [],
//   total_pages: 0,
//   total_results: 0,
// };

const useGifsFetch = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [GIFs, setGIFs] = useState([]);



  const fetchData = async (searchTerm = "") => {
  
    try {
      setError(false);
      setLoading(true);
    
      const response = await fetchGIFs(searchTerm);
      console.log(response.data)
      // setGIFs((prev) => ({
      //  ...response
      // }));

      setGIFs(response.data);
      // console.log(GIFs)

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    // setGIFs(initialState)
    setGIFs([])
   
    fetchData(searchTerm);
   
   
  }, [searchTerm]);

  // useEffect(() => {
  // //  if (!isLoadingMore) return;

  // //  fetchData(movies.page + 1, searchTerm)
  // //  setIsLoadingMore(false)
   
   
  // }, [searchTerm]);

  return { GIFs, loading, error, setSearchTerm, searchTerm };
};

export default useGifsFetch;
