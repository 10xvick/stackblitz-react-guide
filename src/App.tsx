import { useState } from 'react';
import { Ex_container } from '../components/Ex_container';
import Sidebar from '../components/Sidebar';

import './style.css';

export const App = () => {
  const [selected, select] = useState('useLayoutEffect');

  return (
    <div className="App">
      <Sidebar />
      <Ex_container />
    </div>
  );
};
