import { createContext, useContext, useState } from "react"

export default function Ex_useContext(){
  return <> <Parent/> </>
}

const Context = createContext({});

function Parent({}){
  const [data,setdata] = useState(0)
  return <Context.Provider value={data}>
    <button onClick={()=>setdata(data+1)}>parent</button> : 
    <Child/>
  </Context.Provider>
}

function Child(){
  return <> child : <Grandchild/> </>
}

function Grandchild(){
  const data = useContext(Context);
  return <> grandchild : {data}</>
}


