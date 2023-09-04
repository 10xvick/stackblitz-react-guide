import React from "react";
import Ex_HOC from '../examples/Ex_HOC';
import Ex_useCallback from '../examples/Ex_useCallback';
import Ex_useEffect from '../examples/Ex_useEffect';
import Ex_useMemo from '../examples/Ex_useMemo';
import Decorator_HOC from '../src/decorators/Decorator_HOC';


export const Ex_components = {};
[Ex_useEffect, Ex_useMemo, Ex_useCallback, Ex_HOC].map((e) =>{
    Ex_components[e.name.split('_')[1]] = Decorator_HOC(e)
  }
);

console.log(Ex_components);


export const Ex_container = ({selected}) => {
  return (
    <div className="Ex_container">
      {React.createElement(Ex_components[selected])}
    </div>
  );
};
