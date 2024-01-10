// components/Autocomplete.tsx
import React, { useState } from 'react';
import Chip from '../Chip/Chip';

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleItemSelect = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setInputValue('');
    }
  };

  const handleItemRemove = (item: string) => {
    const updatedItems = selectedItems.filter((selectedItem) => selectedItem !== item);
    setSelectedItems(updatedItems);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Type to search"
      />

      <div>
        {suggestions.map((suggestion) => (
          <div key={suggestion} onClick={() => handleItemSelect(suggestion)}>
            {suggestion}
          </div>
        ))}
      </div>

      <div>
        {selectedItems.map((item) => (
          <Chip key={item} label={item} onClose={() => handleItemRemove(item)} />
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
