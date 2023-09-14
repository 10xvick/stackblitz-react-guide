import { useEffect, useId } from "react";

export default function Ex_useId(){
  const id = useId();

  useEffect(()=>{
    document.getElementById(id).style.color = 'yellow';
  })

  return <div id={id}> {id} </div>
}