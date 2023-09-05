import { Ex_components } from "./Ex_container";

const list = Object.keys(Ex_components);

export default function Sidebar({select}) {
  return <div className="sidebar">
    <div className='sidebar-list'>{list.map(e=> <Item key={e} name={e} select={select}/> ) }</div>
  </div>;
}


function Item({name,select}){
  return <span onClick={()=>select(name)} className='sidebar-text'>{name}</span>
}

