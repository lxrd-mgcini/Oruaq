import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function QuantitySelector() {
  const [count, setCount] = useState(1);
  return (
    <div className="flex w-full items-center justify-evenly bg-brand">
      <button
        className="px-6 py-3"
        onClick={() => {
          count > 1 && setCount(count - 1);
        }}
      >
        <Minus />
      </button>
      <span className="px-6 py-1 text-3xl font-normal">{count}</span>
      <button className="px-6 py-3" onClick={() => setCount(count + 1)}>
        <Plus />
      </button>
    </div>
  );
}

export default QuantitySelector;
