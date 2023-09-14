import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from './Ex_container';

export default function Sidebar({ select, selected }) {
  const [type, settype] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar-list">
        {routes.map((e) => (
          <NavLink to={e.name} >{e.name}</NavLink>
        ))}
        <a className="sidebar-text sidebar-list">III</a>
      </div>
    </div>
  );
}


