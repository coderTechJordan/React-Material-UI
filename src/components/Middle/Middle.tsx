// components/Middle/Middle.tsx
import React, { ReactNode } from 'react';

interface MiddleProps {
  children: ReactNode;
}

const Middle: React.FC<MiddleProps> = ({ children }) => {
  return <div className="Middle">{children}</div>;
};

export default Middle;
