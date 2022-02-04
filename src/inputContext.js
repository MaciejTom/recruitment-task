import { createContext, useState } from "react";

export const Context = createContext(null);

const Provider = (props) => {
  const [input, setInput] = useState("");

  return (
    <Context.Provider
      value={{
        input,
        setInput,
      }}
    >
     {props.children}
    </Context.Provider>
  );
};

export default Provider