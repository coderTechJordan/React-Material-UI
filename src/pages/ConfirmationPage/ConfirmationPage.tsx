// pages/ConfirmationPage/ConfirmationPage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const { state } = useLocation();
  // const navigate = useNavigate();
  // const emailRef = useRef<HTMLInputElement | null>(null);

  // BELONGS IN USER REGISTRATION SIGN UPPAGE
  // function handleSubmit(event: { preventDefault: () => void }) {
  //   event.preventDefault();
  //   const emailValue = emailRef.current?.value;
  //   navigate('/confirmed', { state: { email: emailValue } });
  // }

  return (
    <div>
      <h1>Confirmation</h1>
      <p>Your action has been confirmed. Thank you!</p>
      {state && (
        <p>
          We've sent more an email to <strong>{state.email}</strong>
        </p>
      )}
    </div>
  );
};

export default ConfirmationPage;
