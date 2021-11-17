import {useState,useEffect}from 'react'
export default function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const HandleScroll = () => {
        setScrollPosition(window.scrollY);
      };
      document.addEventListener("scroll", HandleScroll);
      return () => {
        document.removeEventListener("scroll", HandleScroll);
      };
    }, []);
    return scrollPosition
}
