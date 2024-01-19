// Header.tsx
import React from 'react';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {
  routes: { path: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ routes }) => {
  return (
    <header className={'Header'}>
      {/* Pass the routes prop to Navigation */}
      <Navigation routes={routes} />
      {/* Other content in your header */}
    </header>
  );
};

export default Header;
