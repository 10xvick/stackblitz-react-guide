import { FC, useState } from 'react';
import { Ex_container } from '../components/Ex_container';
import Sidebar from '../components/Sidebar';

import './style.css';


export const App = () => {

  const [selected, select] = useState('useEffect');

  return (
    <div className='App'>
      <Sidebar select={select} selected={selected}/>
      <Ex_container selected={selected}/>
    </div>
  );
};
