import React from "react";
import useScrollPosition from "../Hooks/useScrollPosition";
export default function App() {
  const scrollPosition = useScrollPosition();
  return (
    <div style={{ padding: "1000px 0" }}>
      <h2>滚动的距离:{scrollPosition}</h2>
    </div>
  );
}
