import { useReducer } from "react"


const reducer = (state,action )=>{
  switch(action){
    case 'increment': state.count+=1;
    break;
    case 'decrement': state.count-=1;
    break;
  }
  return {...state};
}

export default function Ex_useReducer(){
  const [state,dispatch] = useReducer(reducer,{count:0})
  return <>
    <button onClick={()=>dispatch('increment')}>+</button> {state.count} <button onClick={()=>dispatch('decrement')}>-</button>
  </>
}