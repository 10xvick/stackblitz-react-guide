import { useDeferredValue, useEffect, useState, useTransition } from "react"

export default function Ex_useTransition(){
  const [pending,startTransition] = useTransition();
  const [name,setName] = useState('');
  let [list,setList] = useState([]);

  function handle(val){
    setName(val);
    // startTransition(()=>{
    // });
    setList(Array(40000).fill(<li>{val}</li>));
  }
  useEffect(()=>{
  },[name]);
  
  return <div> 
    <input value={name} onInput={e=>handle(e.target.value)}/>
    {pending && <> loading...</>}
    <List list={list}/>
  </div>
}

function List({list}){
  const deferedlist = useDeferredValue(list)
  return <ul style={{'maxHeight':'100px','overflow':'scroll'}}>{deferedlist}</ul>
}


