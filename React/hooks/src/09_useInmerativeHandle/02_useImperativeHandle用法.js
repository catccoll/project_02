import React, { forwardRef, useRef, useImperativeHandle } from "react";

export default function App() {
  //   function changeText() {
  //     // console.log(App1Ref);
  //     // console.log(App1Ref.current);
  //     App1Ref.current.innerHTML = "我很好";
  //   }
  const App1Ref = useRef();
  return (
    <div>
      <button onClick={(e) => App1Ref.current.changeText()}>
        修改App1里面的内容
      </button>
      <App1 ref={App1Ref} />
    </div>
  );
}
const App1 = forwardRef((props, ref) => {//
  const h2Ref = useRef();
  useImperativeHandle(
    ref,
    () => ({
      changeText: () => {
          console.log(ref);
        h2Ref.current.innerHTML = "我很好";
      },
    }),
    [h2Ref.current]
  );
  return (
    <div>
      <h2 ref={h2Ref}>你好吗</h2>
    </div>
  );
});
//  为什么一定要这么设计呢  操蛋
// 
