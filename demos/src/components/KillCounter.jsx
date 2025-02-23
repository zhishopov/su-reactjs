import { useState } from "react";

export default function KillCounter() {
  const [count, setCount] = useState(0);

  const isMax = count >= 10;

  const incrementCountClickHandler = () => {
    setCount(count + 1);
  };

  const decrementCountClickHandler = () => {
    setCount(count - 1);
  };

  if (count > 10) {
    return <h2>GAME OVER!</h2>;
  }

  let title = <h2>Kill Counter</h2>;

  switch (count) {
    case 1:
      title = <h2>First Blood</h2>;
      break;
    case 2:
      title = <h2>Double Kill</h2>;
      break;
    case 3:
      title = <h2>Triple Kill</h2>;
      break;
    case 4:
      title = <h2>Multi Kill</h2>;
      break;
    case 5:
      title = <h2>Mega Kill</h2>;
      break;
  }

  return (
    <>
      {title}
      <div>{count}</div>
      <button onClick={incrementCountClickHandler}>+</button>
      {count > 6 ? (
        <button onClick={decrementCountClickHandler}>-</button>
      ) : (
        <p>No decrement yet!</p>
      )}
      {isMax && <p>Watch Out!</p>}
    </>
  );
}
