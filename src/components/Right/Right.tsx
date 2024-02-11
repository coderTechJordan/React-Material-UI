// components/Right/Right.tsx
import React from 'react';
import './Right.css';

const Right: React.FC = () => {
  return (
    <aside className="Right">
      <div className="content">
        <h2>Right Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec est facilisis
          fermentum.
        </p>
        <p>
          Suspendisse potenti. Proin lacinia, mauris non facilisis condimentum, felis lectus posuere
          felis, vel venenatis odio justo sed lorem.
        </p>
      </div>
    </aside>
  );
};

export default Right;
