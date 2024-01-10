// components/ExpansionPanels.tsx
import React, { useState } from 'react';

interface ExpansionPanelsProps {
  panels: { title: string; content: React.ReactNode }[]; // or any other data type
}

const ExpansionPanels: React.FC<ExpansionPanelsProps> = ({ panels }) => {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  // Expansion Panels implementation

  return (
    <div>
      {panels.map((panel, index) => (
        <div key={index}>
          <div
            onClick={() => setActivePanel(activePanel === index ? null : index)}
            className={activePanel === index ? 'active' : ''}
          >
            {panel.title}
          </div>
          {activePanel === index && <div>{panel.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default ExpansionPanels;
