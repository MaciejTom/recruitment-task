//Components
import Grid from "../components/Grid";
import SearchBar from "../components/SearchBar";
//Hooks
import useGifsFetch from "../hooks/useGifsFetch";

const Home = () => {
  
  const { GIFs, error, loading, setSearchTerm } = useGifsFetch();

  return (
    <>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid GIFs={GIFs} error={error} loading={loading} />
    </>
  );
};

export default Home;
