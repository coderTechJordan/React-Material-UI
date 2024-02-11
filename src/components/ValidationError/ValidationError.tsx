import React from 'react';
import { FieldError } from 'react-hook-form';

type ValidationErrorProps = {
  fieldError?: FieldError;
  className?: string; // Allow custom class name to be passed
};

const ValidationError: React.FC<ValidationErrorProps> = ({ fieldError, className }) => {
  // If no field error, return null (component won't render)
  if (!fieldError) {
    return null;
  }

  // Apply default and custom classes if provided
  const classes = `text-red-500 text-xs mt-1 ${className || ''}`;

  return (
    <div role="alert" className={classes}>
      {fieldError.message}
    </div>
  );
};

export default ValidationError;
