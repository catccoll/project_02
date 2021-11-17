import React,{useContext} from "react";
import { UserContext, ThemeContext } from "../App";
export default function App() {
    const user = useContext(UserContext)
    const theme =useContext(ThemeContext)
    // 这是真他妈的香   太简单了，这就不用写下面的consumer这种东西了
    console.log(user,theme);
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2>{value.name}</h2>
                  <h2>{value.age}</h2>
                  <h2>{theme.fontSize}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}
