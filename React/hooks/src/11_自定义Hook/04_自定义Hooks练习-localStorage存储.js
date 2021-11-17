import useLocalStorage from "../Hooks/useLocalStorage";
import {useRef} from 'react'
export default function App() {
  const [name,setName]=  useLocalStorage()
  const InputRef = useRef();
  return (
    <div>
      <h2>{name}</h2>
      <input type="text" ref={InputRef} />
      <button onClick={(e) => changName()}>修改名字</button>
    </div>
  );
  function changName() {
    setName(InputRef.current.value);
    InputRef.current.value = "";
  }
}
// 给人的感觉就是自定义hook就是一种函数封装的思想