import React, { createContext, useState } from "react";
import App1 from "./03_useEffect的使用/03_useEffect模拟订阅和取消";
import App2 from "./03_useEffect的使用/04_useEffect一起使用";
// import App3 from "./04_useContext的使用/01_useContext的使用";
import App4 from './11_自定义Hook/01_自定义Hook'
import App5 from './11_自定义Hook/02_自定义Hook练习-context共享'
import App6 from './11_自定义Hook/03_自定义Hook练习-获取滚动位置'
 export const UserContext = createContext();
 export const ThemeContext = createContext();
 export const TokenContext=createContext()
export default function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {flag ? <App4 /> : ""}
      <button onClick={(e) => setFlag(!flag)}>渲染组件是否</button>
      <UserContext.Provider value={{name:'why',age:18}}> 
        <TokenContext.Provider  value={'adadmadm'}>
          <App5 />
        </TokenContext.Provider>
      </UserContext.Provider>
      <App6/>
    </div>
  );
}
