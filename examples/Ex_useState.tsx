import { useState } from 'react';

export default function Ex_useState() {
  const [value, setvalue] = useState(0);

  return (
    <div>
      <button onClick={() => setvalue(value - 1)}>-</button>
      {value}
      <button onClick={() => setvalue((e) => e + 1)}>+</button>
    </div>
  );
}
