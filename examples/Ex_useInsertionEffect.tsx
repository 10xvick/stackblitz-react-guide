import { useInsertionEffect, useRef, useState } from 'react';

export default function Ex_useInsertionEffect() {
  const [count, setcount] = useState(0);
  const ref = useRef();

  useInsertionEffect(() => {
    const e = document.getElementById('btn') || ref.current?.innerText;

    console.log(
      e ||
        'element is not found on in the dom since it has not been inserted yet'
    );

    if (e) e.style.color = 'yellow';
  }, [count]);

  return (
    <button
      id="btn"
      ref={ref}
      onClick={() => {
        setcount(count + 1);
      }}
    >
      rerender
    </button>
  );
}

/**
 
  useInsertionEffect is called "Insertion" because it runs synchronously before all other DOM mutations have been applied. This allows you to perform side effects that need to run before any other styles or elements are inserted into the DOM, such as inserting global DOM nodes like 'style' or SVG 'defs' in the document head.

 */
