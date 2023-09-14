import { useDebugValue, useState } from 'react';

export default function Ex_useDebugValue() {
  const value = useCustom();
  return <div> use debug value {value}</div>;
}

function useCustom() {
  const [a] = useState(0);
  const [b] = useState(0);

  useDebugValue(b);

  return a;
}
