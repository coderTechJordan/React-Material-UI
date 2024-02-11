// components/Left/Left.tsx
import React from 'react';
import './Left.css';

const Left: React.FC = () => {
  return (
    <aside className="Left">
      <div className="content">
        <h2>Left Sidebar</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </aside>
  );
};

export default Left;
