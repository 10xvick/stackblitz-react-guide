import { useDeferredValue, useState } from "react";


export default function Ex_useDeferredValue(){
  const [list,setList] = useState([]);
  const [text,setText] = useState('');

  return <>
  <input value={text} onInput={e=>{
    const val = e.target.value;
    setText(val);
    setList(Array(40000).fill(<li>{val}</li>));
    }}/>
    <List list={list}/>
  </>
}

function List({list}){
  const deferedlist = useDeferredValue(list)
  return <ul style={{'maxHeight':'100px','overflow':'scroll'}}>{deferedlist}</ul>
}