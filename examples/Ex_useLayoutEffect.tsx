import { useEffect, useLayoutEffect, useRef, useState } from "react"

export default function Ex_useLayoutEffect(){
  const [show,setshow] = useState(false);
  const [ref1,ref2] = [useRef(),useRef()];


  function some_layout_operation(){
    const bottom = ref1.current?.getBoundingClientRect().bottom;
    console.log(bottom);
    if(!ref2.current) return;
    ref2.current.style.top = bottom + 'px';
  }
  useEffect(()=>{
    some_layout_operation();
  },[show])
  
  useLayoutEffect(()=>{
  },[show]);
  
  return <>
  <button onClick={()=>setshow(!show)} ref={ref1}> 1 </button>
  {show && <button ref={ref2} style={{position:'absolute'}}> 2 </button>}
  </>
}

/**
 
  useLayoutEffect is called "Layout" because it runs synchronously after the DOM has been constructed but before the browser paints the screen. This allows you to perform side effects that require access to the layout of the component, such as measuring the size of an element or updating the DOM synchronously to prevent flickering or other visual artifacts.

 */