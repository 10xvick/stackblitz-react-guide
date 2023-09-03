import { useEffect, useState } from 'react';

export default function Ex_useEffect() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  // component did mount
  useEffect(() => {
    console.log('component did mount');
  }, []);

  // component did update
  useEffect(() => {
    console.log('component did update');

    // component will unmount
    return () => {
      console.log('component will unmount');
    };
  }, [flag]);

  return (
    <div>
      useEffect
      <div onClick={() => setFlag(!flag)}>{flag ? 'on' : 'off'}</div>
    </div>
  );
}
