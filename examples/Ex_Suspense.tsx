import { lazy, Suspense, useEffect, useState } from "react";

export default function Ex_Suspense(){
  return <App/>
}


const getdata = new Promise((res,rej)=>{
  setTimeout(()=>res('success'),2000);
})


const MyComponent = () => {

  const data = wrapPromise(getdata).read();
  return <>data:{data}</>
};


function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

const wrapPromise = promise => {
  let status = 'pending';
  let result;
  let suspender = promise
    .then(res => {
      (status = 'success'), (result = res);
    })
    .catch(err => {
      (status = 'error'), (result = err);
    });
  return {
    read() {
      if (status === 'pending') throw suspender;
      else if (status === 'error') throw result;
      else return result;
    }
  };
};
