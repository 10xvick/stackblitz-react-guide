import { Route, Routes } from 'react-router-dom';
import Ex_Composition from '../examples/Ex_Comosition';
import Ex_HOC from '../examples/Ex_HOC';
import Ex_Suspense from '../examples/Ex_Suspense';
import Ex_useCallback from '../examples/Ex_useCallback';
import Ex_useContext from '../examples/Ex_useContext';
import Ex_useDeferredValue from '../examples/Ex_useDeferredValue';
import Ex_useEffect from '../examples/Ex_useEffect';
import Ex_useImperativeHandle from '../examples/Ex_useImperativeHandle';
import Ex_useInsertionEffect from '../examples/Ex_useInsertionEffect';
import Ex_useLayoutEffect from '../examples/Ex_useLayoutEffect';
import Ex_useMemo from '../examples/Ex_useMemo';
import Ex_useReducer from '../examples/Ex_useReducer';
import Ex_useTransition from '../examples/Ex_useTransition';
import Decorator_HOC from '../src/decorators/Decorator_HOC';

export const components = 
[Ex_useEffect, Ex_useLayoutEffect, Ex_useInsertionEffect, Ex_useMemo, Ex_useCallback, Ex_useTransition, Ex_useDeferredValue, Ex_useImperativeHandle, Ex_useContext, Ex_useReducer, Ex_Suspense, Ex_Composition, Ex_HOC]

const routes = components.map((e) => {
  const name = e.name.split('_')[1];
  return {component:Decorator_HOC(e,name),name:name };
});



export const Ex_container = () => {
  return (
    <div className="Ex_container">
      <Routes>
        {routes.map(E=><Route path={'/'+E.name} element={<E.component/>}/>)}
      </Routes>
    </div>
  );
};
