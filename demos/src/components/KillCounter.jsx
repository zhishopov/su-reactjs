import { useState } from "react";

export default function KillCounter() {
  const [count, setCount] = useState(0);

  const incrementCountClickHandler = () => {
    setCount(count + 1);
  };

  if (count > 10) {
    return <h2>GodLike</h2>;
  }

  let title = <h2>Kill Counter</h2>;
  if (count == 1) {
    title = <h1>First Blood</h1>;
  }

  return (
    <>
      {title}
      <div>{count}</div>
      <button onClick={incrementCountClickHandler}>+</button>
    </>
  );
}
