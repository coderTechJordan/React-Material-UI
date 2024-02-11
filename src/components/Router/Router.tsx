import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import LazyHomePage from '../../pages/HomePage/HomePage';
import LazyAboutPage from '../../pages/AboutPage/AboutPage';
import LazyFormPage from '../../pages/FormPage/FormPage';
import LazyConfirmationPage from '../../pages/ConfirmationPage/ConfirmationPage';
import LazySignUp from '../../pages/SignUp/SignUp';
import LazySignIn from '../../pages/SignIn/SignIn';
import LazyNotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const queryClient = new QueryClient();

export const routesData = [
  { path: '/index.html', label: 'Home', element: <LazyHomePage /> },
  { path: '/about', label: 'About', element: <LazyAboutPage /> },
  { path: '/form', label: 'Form', element: <LazyFormPage /> },
  { path: '/confirmed', label: 'Confirmed', element: <LazyConfirmationPage /> },
  { path: '/signup', label: 'SignUp', element: <LazySignUp /> },
  { path: '/signin', label: 'SignIn', element: <LazySignIn /> },
  { path: '*', label: 'Not Found', element: <LazyNotFoundPage /> },
];

const AppRouter: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routesData.map(({ path, element }, index) => (
          <Route
            key={path}
            path={path}
            element={<React.Suspense fallback={<div>Loading...</div>}>{element}</React.Suspense>}
          />
        ))}
      </Routes>
    </QueryClientProvider>
  );
};

export default AppRouter;
