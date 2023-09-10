import { useEffect, useInsertionEffect, useLayoutEffect, useRef, useState } from "react"

export default function Ex_useInsertionEffect(){
  const [data,setData] = useState(false);
  const ref = useRef();

  let x = 0;
  function test(){
    console.log( ref.current?.innerText, ++x);
  }
  
  useEffect(()=>{
    test();
  },[]);
  
  useLayoutEffect(()=>{
    test();
  },[]);
  
  useInsertionEffect(()=>{
    test();
  },[]); 

  return <button onClick={()=>setData(!data)} ref={ref}> x: {data} 
  </button>
}

