import { lazy, Suspense, useEffect, useState } from "react";

export default function Ex_Suspense(){
  return <App/>
}


const fetchData = () => {
  let flag = true;
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      Math.random()<10.5?res('resolved successfully'):rej(new Error('rejected with error'));
    },1000)
  })
};

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error,setError] = useState();

  useEffect(() => {
    fetchData().then((data) => setData(data)).catch(err=>setError(err));
  }, []);

  if(data) return <div>x{data}</div>;
  return null;
  // throw error;
};

function Sus({children}){
  return children?<>{children}</>:<div>Loading...</div>
}

function App() {
  return (
    <div>
      <Sus>
        <MyComponent/>
      </Sus>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}
