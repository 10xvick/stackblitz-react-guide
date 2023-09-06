import { Suspense, useEffect, useState } from "react";

export default function Ex_Suspense(){
  const [Data,setData] = useState(null);

  useEffect(()=>{
    const ref = setInterval(()=>{
      setData(e=>(e?undefined:'x'));
    },2000);

    return ()=>{
      clearInterval(ref);
    }
  }, [])
  return <div>
    <Suspense fallback={<div>Loading...</div>}>
      {Data}
    </Suspense>
  </div>
}