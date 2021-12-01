import React, { PureComponent, useEffect } from "react";
import { subAction, recommendAxios } from "../store/actionCreators";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
export default function About() {
  console.log(22);
  const { banners } = useSelector(
    (state) => ({
      //地址不同，内存不同，这里不是浅层比较，而是进行'==='比较,所以在这个组件即使没有依赖其他的东西，也会进行组件的重新渲染,所以redux提供了一个shallowEqual当做useSelect的第二个参数，这样就会进行浅层的比较，性能优化
      counter: state.counterInfo.counter,
      banner: state.homeInfo.banners,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <div>
      <h1>About</h1>

      <button onClick={(e) => dispatch(subAction())}>-1</button>
      <button onClick={(e) => dispatch(subAction(5))}>-5</button>
    </div>
  );
}
