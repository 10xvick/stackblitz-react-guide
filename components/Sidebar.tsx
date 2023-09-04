import { Ex_components } from "./Ex_container";

const list = Object.keys(Ex_components);

export default function Sidebar({selected}) {
  return <div className="sidebar">
    {list.map(e=> <Item name={e}/> ) }
    {Array(100).fill( <Item name={1}/>)}
  </div>;
}


function Item({name}){
  return <div>{name}</div>
}

