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
      useCallback:&nbsp;
      <button onClick={() => setFlag(!flag)}>{flag ? 'on' : 'off'}</button>
      &nbsp;
      x: <button onClick={() => setCount(count + 1)}>{count}</button> |
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
