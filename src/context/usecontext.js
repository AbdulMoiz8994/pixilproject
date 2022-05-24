import React, { useState } from "react";
import { CreateContext } from "./createContext";

export const Usecontext = (props) => {
  const [value, setValue] = useState("");

  const onChangeFunc = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div>
      <CreateContext.Provider
        value={{
          value,
          onChangeFunc,
        }}
      >
        {props.children}
      </CreateContext.Provider>
    </div>
  );
};
