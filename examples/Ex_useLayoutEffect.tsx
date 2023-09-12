import { forwardRef, useEffect, useInsertionEffect, useLayoutEffect, useRef, useState } from "react"

export default function Ex_useLayoutEffect(){
  const [show,setshow] = useState(true);
  const ref = useRef();
  
  useLayoutEffect(()=>{
    if(!show) return;
    
  },[show])

  return <>
    <button onClick={()=>setshow(!show)}>toggle</button>
    {show && <ChatWindow messages={Array(100000).fill('abc').map(e=>Math.random())}/>}
  </>
}


function ChatWindow({ messages }) {
  const [shouldScroll, setShouldScroll] = useState(true);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (shouldScroll) {
      const chatWindow = chatWindowRef.current;
      chatWindow.scrollTop = chatWindow.scrollHeight;
      setShouldScroll(false);
    }
  }, [messages]);

  const handleScroll = () => {
    const chatWindow = chatWindowRef.current;
    const isScrolledToBottom =
      chatWindow.scrollHeight - chatWindow.scrollTop === chatWindow.clientHeight;
    setShouldScroll(isScrolledToBottom);
  };

  return (
    <div
      ref={chatWindowRef}
      onScroll={handleScroll}
      style={{ height: '400px', overflowY: 'scroll' }}
    >
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
}


/**
 
  useLayoutEffect is called "Layout" because it runs synchronously after the DOM has been constructed but before the browser paints the screen. This allows you to perform side effects that require access to the layout of the component, such as measuring the size of an element or updating the DOM synchronously to prevent flickering or other visual artifacts.

 */