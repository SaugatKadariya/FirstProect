import React, { useState } from "react";

const Body = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((preCount) => preCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };


  return (
    <div className="p-20">
      <p className="text-xl font-bold mb-4">Count: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-550 hover:text-red-500 hover:bg-blue-800 font-bold p-4 m-4 rounded"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-red-500 hover:text-red-700 font-bold p-4 m-4 rounded"
      >
        Decrement
      </button>
    </div>
  );
};
export default Body;
