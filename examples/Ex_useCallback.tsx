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

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>
        rerender
      </button> x: <button onClick={() => setCount(count + 1)}>{count}</button>
      &nbsp;|
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
