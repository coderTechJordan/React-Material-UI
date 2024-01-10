// Header.tsx
import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  // your component props here
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      {/* your header component content */}
    </header>
  );
};

export default Header;  // Add this export statement
