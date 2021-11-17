import{ useState,  useEffect } from "react";

export default function useLocalStorage() {
    const [name, setName] = useState(() => {
        return localStorage.getItem("name");
      });
      useEffect(() => {
        localStorage.setItem("name", name);
      },[name]);
      return [name,setName]
}
