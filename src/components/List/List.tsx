// components/List.tsx
import React from 'react';

interface ListProps {
  items: string[]; // or any other data type
}

const List: React.FC<ListProps> = ({ items }) => {
  // List implementation

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
