import React, { useRef, PureComponent, useEffect } from "react";

export default function UseRef() {
  function changeDom() {
    titleRef.current.innerHTML = "我很好";

    console.log(inputRef.current.value);
    console.log(textRef.current);
  }

  const titleRef = useRef(); //useRef只能使用在标签上，或者自己的类子组件上
  const inputRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h2 ref={titleRef}>1</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={textRef} />
 
      <button onClick={(e) => changeDom()}>修改DOM</button>
    </div>
  );
}

class TestCpn extends PureComponent {
  render() {
    return (
      <div>
        <h2>222</h2>
      </div>
    );
  }
}
