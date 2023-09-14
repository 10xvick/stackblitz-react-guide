import { useEffect, useLayoutEffect, useRef} from "react"

export default function Ex_useLayoutEffect(){
  const ref = useRef();
  
  //useEffect
  useLayoutEffect
  (()=>{
    ref.current.style.background = 'none';
  },[])

  return <>
    <div style={{background:'red'}} ref={ref}> I flicker with useEffect but not with useLayoutEffect </div>
    <div style={{display:'none'}}>{Array(100000).fill(<div></div>)}</div>
  </>
}



/**
 
  useLayoutEffect is called "Layout" because it runs synchronously after the DOM has been constructed but before the browser paints the screen. This allows you to perform side effects that require access to the layout of the component, such as measuring the size of an element or updating the DOM synchronously to prevent flickering or other visual artifacts.


  disable concurrent mode if flicker is not observable
  or 
  reload the page, flicker is not avoidable on reload/first-load
 */