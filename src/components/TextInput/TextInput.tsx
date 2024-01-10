// components/TextInput.tsx
import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
  // Add any other necessary props
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  // Text Input implementation

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      // Add styling or additional attributes as needed
    />
  );
};

export default TextInput;
