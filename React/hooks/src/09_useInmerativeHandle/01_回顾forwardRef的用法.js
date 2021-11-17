import React, { forwardRef, useRef } from "react";

export default function App() {
  function changeText() {
    console.log(App1Ref);
    console.log(App1Ref.current);
    App1Ref.current.innerHTML = "我很好";
  }
  const App1Ref = useRef();
  return (
    <div>
      <button onClick={(e) => changeText()}>修改App1里面的内容</button>
      <App1 ref={App1Ref} />
    </div>
  );
}
const App1 = forwardRef((props, ref) => {
  return (
    <div>
      <h2 ref={ref}>你好吗</h2>
    </div>
  );
});
