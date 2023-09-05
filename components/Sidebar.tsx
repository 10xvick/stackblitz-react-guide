import { useState } from "react";
import { Ex_components } from "./Ex_container";

const list = Object.keys(Ex_components);

export default function Sidebar({select,selected}) {
  const [type,settype] = useState(true);


  return <div className="sidebar">
    <span onClick={()=>settype(!type)} className='sidebar-text sidebar-list'>III</span>

    <div className='sidebar-list'>
      {type? list.map(e=> <Item key={e} name={e} select={select} selected={selected} /> ):
      null }
    </div>

  </div>;
}


function Item({name,select,selected}){
  return <span onClick={()=>select(name)} className={`sidebar-text ${name==selected?'active':''}`}>{name}</span>
}

