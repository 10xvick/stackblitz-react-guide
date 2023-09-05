import { useMemo, useState } from 'react';

export default function Ex_useMemo() {
  let [count, setCount] = useState(1);
  let [flag, setFlag] = useState(true);

  const double = useMemo(() => {
    console.log('memo');
    // for(let i=0;i++<1000000000;){}
    return count * 2;
  }, [count]);

  // const double = ()=>count*2;

  return (
    <div>
      <button onClick={() => setFlag(!flag)}>
        rerender
      </button> x: <button onClick={() => setCount(count + 1)}>{count}</button> | 2x:{double}
    </div>
  );
}
