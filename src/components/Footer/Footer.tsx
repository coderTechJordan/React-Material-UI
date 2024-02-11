// components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="content">
        <h2>Contact Us</h2>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 1234 Example St, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
