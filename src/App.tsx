// App.tsx
import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import './App.css';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Middle from './components/Middle/Middle';
import Right from './components/Right/Right';
import Footer from './components/Footer/Footer';
import AppRouter from './components/Router/Router';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const routesData = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/form', label: 'Form' },
    { path: '/confirmed', label: 'Confirmed' },
    { path: '/signup', label: 'SignUp' },
    { path: '/signin', label: 'SignIn' },
    { path: '*', label: 'Not Found' },
  ];

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          {/* Pass the route data to the Navigation component */}
          <Header routes={routesData} />
          <div className="WrapMiddle">
            <Left />
            <Middle>
              {/* Display the routes provided by AppRouter in the Middle section */}
              <AppRouter />
            </Middle>
            <Right />
          </div>
          <Footer />
          {/* Other components */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
