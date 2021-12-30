import React, { memo, useContext } from "react";
import { context } from "./store";

export default memo(function Home() {
  const {state,dispatch} = useContext(context);
const changeAge=()=>{
    dispatch({
        type:'add',
        num:18
    })
}
  return (
    <div>
      <h4>{state.age}</h4>
      <button onClick={()=>{changeAge()}}>修改年龄</button>
    </div>
  );
});
