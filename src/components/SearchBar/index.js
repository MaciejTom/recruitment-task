import { useEffect, useContext } from "react";
//Styles
import { Wrapper, Content, Input } from "./SearchBar.styles";
//Images
import searchIcon from "../../images/search-icon.svg";
//Context
import { Context } from "../../inputContext";

const SearchBar = ({ setSearchTerm }) => {
    const { setInput, input } = useContext(Context);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [setSearchTerm, input]);

  useEffect(() => {
    setInput(input);
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <Input
          type="text"
          placeholder="Search GIF"
          value={input}
          onChange={(e) => {
            handleChange(e);
            setInput(e.target.value);
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
