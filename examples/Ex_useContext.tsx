import { createContext, useContext, useState } from "react"

export default function Ex_useContext(){
  return <> <Parent/> </>
}

const Context = createContext({});

function Parent({}){
  const [data,setdata] = useState('context')
  return <Context.Provider value={data}>
    parent : 
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


