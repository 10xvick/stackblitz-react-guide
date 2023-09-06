import { Suspense, useEffect, useState } from "react";

export default function Ex_Suspense(){
  const [Data,setData] = useState(null);

  useEffect(()=>{
    const ref = setInterval(()=>{
      setData(e=>(e?null:'x'));
    })
  }, [])
  return <div>
    <Suspense fallback={<div>Loading...</div>}>
      suspense
      {Data}
    </Suspense>
  </div>
}