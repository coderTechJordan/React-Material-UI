// components/Chip.tsx
import React from 'react';

interface ChipProps {
  label: string;
  onClose: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onClose }) => {
  return (
    <div>
      <span>{label}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default Chip;
