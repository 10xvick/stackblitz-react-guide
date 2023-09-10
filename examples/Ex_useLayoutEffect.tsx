import { useLayoutEffect, useState } from "react"

export default function Ex_useLayoutEffect(){
  const [data,setData] = useState();
  useLayoutEffect(()=>{
    setData(data);
    console.log(data);
  },[])
  
  return <>uselayouteffect</>
}