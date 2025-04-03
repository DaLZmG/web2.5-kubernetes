"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="rounded-lg border border-slate-300 px-3 py-1 dark:border-slate-700"
    >
      {count}
    </button>
  );
}
