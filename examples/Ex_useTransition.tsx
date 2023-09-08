import { useEffect, useState } from "react"

export default function Ex_useTransition(){
  const [name,setName] = useState('name');
  let [list,setList] = useState(['name']);
  useEffect(()=>{
    setList(Array(10).fill(name));
  },[name]);

  return <div> 
    <input value={name} onInput={e=>setName(e.target.value)}/>
    <ul style={{'max-height':'100px','overflow':'scroll'}}>{list.map(e=><li>{e}</li>)}</ul>
  </div>
}