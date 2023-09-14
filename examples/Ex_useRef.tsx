import { createRef, forwardRef, useRef, useState } from 'react';

export default function Ex_useRef() {
  const [text, settext] = useState('');
  const first = useRef();
  const second = createRef();
  return (
    <div>
      <input ref={first} /> <Input ref={second} />{' '}
      <button
        onClick={() =>
          settext(first.current.value + ' ' + second.current.value)
        }
      >
        {' '}
        submit{' '}
      </button>{' '}
      {text}
    </div>
  );
}

const Input = forwardRef(custominput);

function custominput({}, ref) {
  return <input ref={ref} />;
}
