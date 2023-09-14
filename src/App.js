import React, { useState, useEffect } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        if (count < 10) {
          setCount(count + 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [count, isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={togglePause}>{isPaused ? "Play" : "Pause"}</button>
    </div>
  );
}

export default CounterApp;
