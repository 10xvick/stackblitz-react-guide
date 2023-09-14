import { useEffect, useState, useSyncExternalStore } from 'react';

export default function Ex_useSyncExternalStore() {
  const [hide, sethide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      sethide(false);
    }, 500);
  }, []);

  return (
    <div>
      async: <CompareTimer Timer={AsyncTimer} hide={hide} />
      <br />
      sync: <CompareTimer Timer={SyncTimer} hide={hide} />
      <br />
    </div>
  );
}

function CompareTimer({ Timer, hide }) {
  return (
    <div>
      {hide || <Timer />} <Timer />
    </div>
  );
}

function AsyncTimer() {
  const [time, settime] = useState('');

  useEffect(() => {
    const interval = setInterval(
      () => settime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}

/**-------useSyncExternalStore----------------*/

let time = '';

const notifier = new Set();

setInterval(()=>{
  time = new Date().toLocaleTimeString();
  notifier.forEach(e=>e());
},1000);


function SyncTimer() {

  useSyncExternalStore((notify)=>{
    notifier.add(notify);
    return ()=>notifier.delete(notify);
  },()=>time);
  

  return <>{time}</>
}
