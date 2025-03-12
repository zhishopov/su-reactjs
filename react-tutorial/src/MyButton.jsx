import { useState } from "react";

export default function MyButton() {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={clickHandler}>{count}</button>
    </>
  );
}
