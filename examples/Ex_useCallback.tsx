import { useCallback, useEffect, useState } from 'react';

export default function Ex_useCallback() {
  let [count, setCount] = useState(1);
  let [flag, setFlag] = useState(true);

  const double = useCallback(
    (e) => {
      return count * e;
    },
    [count]
  );
    
  // const double = ()=>count*2;

  return (
    <div>
      useCallback:
      <button onClick={() => setFlag(!flag)}>{flag ? 'on' : 'off'}</button>
      x: <span onClick={() => setCount(count + 1)}>{count}</span> |
      <List double={double} />
    </div>
  );
}

export function List({ double }) {
  useEffect(() => {
    console.log('callback');
  }, [double]);

  return <> 2x: {double(2)} </>;
}
