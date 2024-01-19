// components/Grid/Grid.tsx
import React, { ReactNode } from 'react';

interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
}

const Grid: React.FC<GridProps> = ({ children, columns = 2, gap = '16px' }) => {
  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
  };

  return <div style={gridStyles}>{children}</div>;
};

export default Grid;
