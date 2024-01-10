// components/Selection.tsx
import React, { useState } from 'react';

interface SelectionProps {
  choices: string[];
}

const Selection: React.FC<SelectionProps> = ({ choices }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemSelect = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleItemDeselect = (item: string) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  return (
    <div>
      <ul>
        {choices.map((choice) => (
          <li
            key={choice}
            onClick={() => handleItemSelect(choice)}
            style={{ cursor: 'pointer', textDecoration: selectedItems.includes(choice) ? 'underline' : 'none' }}
          >
            {choice}
          </li>
        ))}
      </ul>

      <div>
        <p>Selected Items:</p>
        <ul>
          {selectedItems.map((selectedItem) => (
            <li key={selectedItem} onClick={() => handleItemDeselect(selectedItem)}>
              {selectedItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selection;
