import { Suspense } from 'react';
import ErrorBoundary from '../src/utilites/ErrorBoundary';

export default function Ex_Suspense() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <MyComponent />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

const wrapPromise = (promise) => {
  let status = 'pending';
  let result;
  let suspender = promise
    .then((res) => {
      (status = 'success'), (result = res);
    })
    .catch((err) => {
      (status = 'error'), (result = err);
    });
  return {
    read() {
      if (status === 'pending') throw suspender;
      else if (status === 'error') throw result;
      else return result;
    },
  };
};

const getdata = wrapPromise(
  new Promise((res, rej) => {
    setTimeout(() => res('success'), 4000);
  })
);

const MyComponent = () => {
  const data = getdata.read();
  return <div> data: {data} </div>;
};
