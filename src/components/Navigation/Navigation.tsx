// Navigation.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the regular CSS file

interface NavigationProps {
  routes: { path: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ routes }) => {
  return (
    <nav className="container">
      <ul>
        {routes.map(({ path, label }, index) => (
          <li key={index} className={index === routes.length - 1 ? 'last-item' : 'item'}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
