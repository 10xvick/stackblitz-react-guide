

export default function Decorator_HOC(Component,more_props?){
  return (props)=><div className='container'><Component props={...props}/></div>
}