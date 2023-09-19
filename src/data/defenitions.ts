export const defenitions = {
  useId: 'Generates a unique identifier that remains constant across renders.',
  useSyncExternalStore:
    "Synchronizes a React component's state with an external data store.",
  HOC: 'A function that takes a component and returns a new component with extended functionality.',
  Composition:
    'Ability to pass and render content between the opening and closing tags of a custom component. This is achieved using the props.children property, allowing for flexible and reusable component structures.',
  Suspense:
    'A component that lets you "suspend" rendering while waiting for some asynchronous operation to complete.',
  useReducer: 'A hook for managing complex state logic by dispatching actions.',
  useDebugValue: 'Customizes the display of a custom hook in React DevTools.',
  useContext:
    'Accesses the value of a context provider from anywhere in a component tree.',
  useImperativeHandle:
    'Controls the instance value that is exposed to parent components when using ref.',
  useDeferredValue: 'Delays the update of a state value to reduce UI jank.',
  useTransition:
    'Delays the rendering of a component to improve perceived performance during state changes.',
  useCallback:
    'Memoizes a callback function to prevent unnecessary re-rendering of child components.',
  useMemo: 'Memoizes a value to avoid expensive computations on every render.',
  useRef: 'Provides a mutable object that persists across renders.',
  useInsertionEffect:
    'Runs an effect when a component is inserted into the DOM.',
  useLayoutEffect:
    'Runs an effect after the DOM has been painted but before the browser has painted the screen.',
  useEffect:
    'Runs an effect after each render to perform tasks like data fetching or subscriptions.',
  useState:
    'Manages state in functional components by providing a state variable and a function to update it.',
};
