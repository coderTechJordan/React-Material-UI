// AppRouter.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import FormPage from '../../pages/FormPage/FormPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ConfirmationPage from '../../pages/ConfirmationPage/ConfirmationPage';
import SignUp from '../../pages/SignUp/SignUp';
import SignIn from '../../pages/SignIn/SignIn';
import Navigation from '../Navigation/Navigation';

const AppRouter: React.FC = () => {
  // Map the route data to Route components
  const routesData = [
    { path: '/', label: 'Home', element: <HomePage /> },
    { path: '/about', label: 'About', element: <AboutPage /> },
    { path: '/form', label: 'Form', element: <FormPage /> },
    { path: '/confirmed', label: 'Confirmed', element: <ConfirmationPage /> },
    { path: '/signup', label: 'SignUp', element: <SignUp /> },
    { path: '/signin', label: 'SignIn', element: <SignIn /> },
    { path: '*', label: 'Not Found', element: <NotFoundPage /> },
  ];

  return (
    <Routes>
      {routesData.map(({ path, element }, index) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
