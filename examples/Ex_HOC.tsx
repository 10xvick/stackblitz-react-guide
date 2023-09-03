
function SimpleComponent({type}){
  return <>{type} Component</>
}

function HOC_generator(Component,color){
  return (props)=>{
    return <span style={{color:color}}> <Component {...props}/> </span>
  }
}

const ModifiedComponent = HOC_generator(SimpleComponent,'red')

export default function Ex_HOC() {
  
  return (
    <div>
      Higher Order Component
      <br/>
      <SimpleComponent type={'Original'}/> | <ModifiedComponent type={'Modified'}/>
    </div>
  );
}

