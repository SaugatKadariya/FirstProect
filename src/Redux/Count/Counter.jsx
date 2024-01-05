import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";
import React from "react";
const Counter = () => {
  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increase+</button>
        <button onClick={() => dispatch(decrement())}>Decrease-</button>
      </div>
    </section>
  );
};
export default Counter;
