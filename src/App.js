import React, { useState } from 'react'

export default function Example() {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  return (
    <>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
      Count: {count}
    </>
  );
}
