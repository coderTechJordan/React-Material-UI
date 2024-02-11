// App.tsx
import React from 'react';
import { ThemeProvider } from './themes/ThemeContext';
import './App.css';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
};

export default App;
