import Ex_HOC from '../examples/Ex_HOC';
import Ex_useCallback from '../examples/Ex_useCallback';
import Ex_useEffect from '../examples/Ex_useEffect';
import Ex_useMemo from '../examples/Ex_useMemo';
import Decorator_HOC from '../src/decorators/Decorator_HOC';

export const Ex_components = {};
[Ex_useEffect, Ex_useMemo, Ex_useCallback, Ex_HOC].map((e) => {
  Ex_components[e.name.split('_')[1]] = Decorator_HOC(e);
});

export const Ex_container = ({ selected }) => {
  const Ex = Ex_components[selected];
  return (
    <div className="Ex_container">
      <Ex />
    </div>
  );
};
