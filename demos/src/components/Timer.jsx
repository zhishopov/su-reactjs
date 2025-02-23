import { useState } from "react";

export default function Timer() {
  const startValue = 0;
  const [time, setTime] = useState(startValue);

  setTimeout(() => {
    setTime(time + 1);
  }, 1000);

  return (
    <>
      <h2>Timer</h2>
      <p>{time}</p>
    </>
  );
}
