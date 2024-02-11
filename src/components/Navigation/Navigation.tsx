// Navigation.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
  routes: { path: string; label: string }[];
}

const Navigation: React.FC<NavigationProps> = ({ routes }) => {
  // Filter out the NotFoundPage and ConfirmedPage routes
  const filteredRoutes = routes.filter(
    (route) => route.path !== '*' && route.path !== '/confirmed',
  );

  return (
    <nav className="container">
      <ul>
        {filteredRoutes.map(({ path, label }, index) => (
          <li key={index} className={index === filteredRoutes.length - 1 ? 'last-item' : 'item'}>
            {/* Use dynamicProps to conditionally apply activeClassName */}
            <NavLink
              to={path}
              {...(index === filteredRoutes.length - 1 ? { activeClassName: 'active-link' } : {})}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
