// components/Tabs.tsx
import React, { useState, ReactNode } from 'react';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <ul>
        {React.Children.map(children, (child, index) => {
          // Ensure the child is a valid React element
          if (React.isValidElement(child)) {
            return (
              <li
                key={index}
                onClick={() => handleTabClick(index)}
                className={index === activeTab ? 'active' : ''}
              >
                {child.props.label}
              </li>
            );
          }
          return null;
        })}
      </ul>

      <div>
        {/* Content for the active tab */}
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
