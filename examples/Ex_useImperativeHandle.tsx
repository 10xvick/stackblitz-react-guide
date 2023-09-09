import React, { createRef, useImperativeHandle, useState } from "react";

export default function Ex_useImperativeHandle(){
  const [count,setcount] = useState(0);
  const ref1 = createRef();
  const ref2 = createRef();

  return <div>
    <button onClick={()=>setcount(e=>{
      ref1.current.innerText = ref2.current.c.innerText = e+1;
      return e+1;
    })}>{count}</button> 
    <Without_useImperative ref={ref1} />
    <With_useImperative ref={ref2}/>
    </div>;
}


function without_useImperative({},ref){
  return <> <span ref={ref} > 0 </span> </>
}

function with_useImperative({},ref){
  const localref = createRef();
  useImperativeHandle(ref,()=>({
    c:localref.current
  }))
  return <> <span ref={localref} > 0 </span> </>
}

const With_useImperative = React.forwardRef(with_useImperative);
const Without_useImperative = React.forwardRef(without_useImperative);

/** the purpose of useImperativeHandle is to customise the ref.current object */


