// components/Layout/Layout.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../../queryClient';
import Header from '../Header/Header';
import Left from '../Left/Left';
import Middle from '../Middle/Middle';
import Right from '../Right/Right';
import Footer from '../Footer/Footer';
import AppRouter, { routesData } from '../Router/Router';
import './Layout.css';

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Header routes={routesData} />
      <Left />
      <div className="WrapMiddle">
        <Middle>
          <QueryClientProvider client={queryClient}>
            <AppRouter />
          </QueryClientProvider>
        </Middle>
      </div>
      <Right />
      <Footer />
    </BrowserRouter>
  );
};

export default Layout;
