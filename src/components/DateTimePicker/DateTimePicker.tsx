// components/DateTimePicker.tsx
import React, { useState } from 'react';

interface DateTimePickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ selectedDate, onSelectDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPicker = () => {
    setIsOpen(true);
  };

  const handleClosePicker = () => {
    setIsOpen(false);
  };

  const handleDateChange = (newDate: Date) => {
    onSelectDate(newDate);
    handleClosePicker();
  };

  return (
    <div>
      <input
        type="text"
        value={selectedDate ? selectedDate.toDateString() : ''}
        readOnly
        onFocus={handleOpenPicker}
      />

      {isOpen && (
        <div>
          {/* Render your date and time picker UI here */}
          {/* Example: A date picker library or a custom date and time input */}
          <input
            type="date"
            value={selectedDate?.toISOString().split('T')[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
          <input
            type="time"
            value={selectedDate?.toISOString().split('T')[1].slice(0, 5)}
            onChange={(e) =>
              handleDateChange(
                new Date(`${selectedDate?.toISOString().split('T')[0]}T${e.target.value}`),
              )
            }
          />

          <button onClick={handleClosePicker}>Close Picker</button>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
