import React, { memo, createContext, useReducer } from "react";
import App from "./App";
export const context = createContext();

const initialState = {
  name: "sai",
  sex: "男",
  age: 18,
};
const reducer = (state, actions) => {
  switch (actions.type) {
    case "add":
      return { ...state, age: state.age + actions.num };

    default:
      break;
  }
};
export default memo(function Store() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <context.Provider value={{ state, dispatch }}>
        <App></App>
      </context.Provider>
    </div>
  );
});
