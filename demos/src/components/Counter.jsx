import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCountClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Counter</h2>
      <div>{count}</div>
      <button onClick={incrementCountClickHandler}>+</button>
    </>
  );
}
