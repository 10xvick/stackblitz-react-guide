import { useEffect, useInsertionEffect, useLayoutEffect, useRef, useState } from "react"

export default function Ex_useInsertionEffect(){
  const [count,setcount] = useState(0);
  const ref = useRef();

  let x = 0;
  function test(){
    console.log( ref.current?.innerText, ++x);
  }
  const state = {};
  useEffect(()=>{
    test();
    state['useEffect'] = 0;
  });
  
  useLayoutEffect(()=>{
    test();
    state['useLayoutEffect'] = 0;
  });
  
  useInsertionEffect(()=>{
    test();
    state['useInsertionEffect'] = 0;
  }); 

  return <button ref={ref} onClick={()=>{setcount(count+1)}}>{count}</button>
}

