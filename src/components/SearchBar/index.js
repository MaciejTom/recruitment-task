import React, { useState, useEffect, useRef } from "react";

//Styles
import { Wrapper, Content } from "./SearchBar.styles";
//Images
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [searchValue, setSearchValue] = useState("");

  const initial = useRef(true);

  useEffect(() => {

    if (initial.current) {
      initial.current = false;
      return
    }
    const timer = setTimeout(() => {
    
      setSearchTerm(searchValue);
    }, 500)

    return () => clearTimeout(timer);
  }, [setSearchTerm, searchValue])

  const handleChange = (e) => {
    setSearchValue(e.target.value);
   
  };

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search GIF"
          value={searchValue}
          onChange={(e) => handleChange(e)}
        />
      </Content>
    </Wrapper>
  );
};



export default SearchBar;
