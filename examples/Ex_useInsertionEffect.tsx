import { useEffect, useInsertionEffect, useLayoutEffect, useRef, useState } from "react"

export default function Ex_useInsertionEffect(){
  const [count,setcount] = useState(0);
  const ref = useRef();

  let x = 0;
  function test(){
    console.log( document.getElementById('btn')?.innerText,  ref.current?.innerText, ++x);
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

  return <button id='btn' ref={ref} onClick={()=>{setcount(count+1)}}>{count}</button>
}


/**
 
  useInsertionEffect is called "Insertion" because it runs synchronously before all other DOM mutations have been applied. This allows you to perform side effects that need to run before any other styles or elements are inserted into the DOM, such as inserting global DOM nodes like 'style' or SVG 'defs' in the document head.

 */

