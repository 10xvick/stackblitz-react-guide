import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { components, routes } from './Ex_container';

export default function Sidebar({ select, selected }) {
  const [type, settype] = useState(true);

  return (
    <div className="sidebar">
      <span
        onClick={() => settype(!type)}
        className="sidebar-text sidebar-list"
      >
        III
      </span>

      <div className="sidebar-list">
        {routes.map((e) => (
          <NavLink to={e.name}>{e.name}</NavLink>
        ))}
      </div>
    </div>
  );
}

function Item({ name, select, selected }) {
  return (
    <span
      onClick={() => select(name)}
      className={`sidebar-text ${name == selected ? 'active' : ''}`}
    >
      {name}
    </span>
  );
}
