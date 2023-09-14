import { defenitions } from "../data/defenitions";


export default function Decorator_HOC(Component,name){
  return (props)=><div className='container'>
    <div>{defenitions[name]}</div>
    <br/>
    <p>Example:</p>
    <div className='component-panel'>
      <Component props={...props}/>
    </div>
  </div>
}