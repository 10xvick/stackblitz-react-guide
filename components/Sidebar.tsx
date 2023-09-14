import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from './Ex_container';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-list">
        {routes.map(({ name }) => (
          <NavLink key={name} to={name}>
            {name}
          </NavLink>
        ))}
        <a className="sidebar-text sidebar-list">III</a>
      </div>
    </div>
  );
}
