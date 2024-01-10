// pages/FormPage.tsx
import React, { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Selection from '../../components/Selection/Selection';
import DateTimePicker from '../../components/DateTimePicker/DateTimePicker';
import Dialog from '../../components/Dialog/Dialog';

const FormPage: React.FC = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const choiceList = ['Option 1', 'Option 2', 'Option 3'];

  const handleTextInputChange = (newValue: string) => {
    setTextInputValue(newValue);
  };

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div>
        {/* TextInput Section */}
        <TextInput value={textInputValue} onChange={handleTextInputChange} />
      </div>

      <div>
        {/* Selection Section */}
        <Selection choices={choiceList} />
      </div>

      <div>
        {/* DateTimePicker Section */}
        <DateTimePicker selectedDate={selectedDate} onSelectDate={handleSelectDate} />
      </div>

      <button onClick={handleOpenDialog}>Open Dialog</button>

      {/* Dialog Section */}
      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
        <h2>This is a Dialog</h2>
        <p>Dialog content goes here.</p>
      </Dialog>

      {/* Other form content */}
    </div>
  );
};

export default FormPage;
