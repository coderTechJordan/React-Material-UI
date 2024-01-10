// components/Dialog.tsx
import React from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // Don't render anything if the dialog is closed
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <button onClick={onClose} className="close-button">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
