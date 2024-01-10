// App.tsx
import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import HomePage from './pages/HomePage/HomePage';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <HomePage />
        {/* Other components */}
      </div>
    </ThemeProvider>
  );
};

export default App;
