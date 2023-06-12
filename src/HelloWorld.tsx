import { useState } from "react";

export function HelloWorld() {
  const [count, setCount] = useState(5);

  return (
    <div className="flex flex-col">
      <button
        className="m-2 p-2 bg-gray-300"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count + 1
      </button>
      <button
        className="m-2 p-2 bg-gray-300"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        count - 1
      </button>
      <span className="m-auto">hello world, my count is {count}</span>
    </div>
  );
}
