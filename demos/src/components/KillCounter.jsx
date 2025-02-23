import { useState } from "react";

export default function KillCounter() {
  const [count, setCount] = useState(0);

  const incrementCountClickHandler = () => {
    setCount(count + 1);
  };

  if (count > 5) {
    return <h2>GodLike</h2>;
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
    </>
  );
}
