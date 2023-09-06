import { lazy, Suspense, useEffect, useState } from "react";

export default function Ex_Suspense(){
  return <App/>
}

const image = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APizigani_1367_Chart_10MB.jpg&psig=AOvVaw0ew0E8N1mnNPSn3rLzVy1H&ust=1694074881881000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKC_vPHGlYEDFQAAAAAdAAAAABAE'

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <img style={{width:'100%'}} src={image}/>
      </Suspense>
    </div>
  );
}
