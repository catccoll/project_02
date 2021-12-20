import React, { useCallback, useState } from "react";

export default function UseCallback() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    console.log(22);
  };
  const increment2 = useCallback(() => {
    console.log(11);
    setCounter(counter + 1);
  }, []);

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={increment2}>+2</button>
    </div>
  );
}
