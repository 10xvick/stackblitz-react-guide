import { FC } from 'react';
import Ex_HOC from '../examples/Ex_HOC';
import Ex_useCallback from '../examples/Ex_useCallback';
import Ex_useEffect from '../examples/Ex_useEffect';
import Ex_useMemo from '../examples/Ex_useMemo';

import './style.css';

export const App = () => {

  return (
    <div>
      <h1> React guide </h1>
      <hr/>
      <Ex_useMemo/>
      <hr/>
      <Ex_useCallback/>
      <hr/>
      <Ex_useEffect/>
      <hr/>
      <Ex_HOC/>
    </div>
  );
};
