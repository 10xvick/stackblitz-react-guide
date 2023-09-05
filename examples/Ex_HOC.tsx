
function SimpleComponent({type}){
  return <>{type} Component</>
}

function HOC_fn(Component,color){
  return (props)=>{
    return <span style={{color:color}}> <Component {...props}/> </span>
  }
}

const ModifiedComponent = HOC_fn(SimpleComponent,'red')

export default function Ex_HOC() {
  
  return (
    <div>
      <SimpleComponent type={'Original'}/> | <ModifiedComponent type={'Modified'}/>
    </div>
  );
}

