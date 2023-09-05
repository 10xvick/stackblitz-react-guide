import { useEffect, useState } from 'react';

export default function Ex_useEffect() {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log('component did mount');
  }, []);

  useEffect(() => {
    console.log('component did update : for any state');
  }, []);

  useEffect(() => {
    console.log('component did update : for state flag');

    return () => {
      console.log('component will unmount');
    };
  }, [flag]);

  return (
    <div>
      useEffect:&nbsp;
      <button onClick={() => setFlag(!flag)}>rerender</button>
    </div>
  );
}
