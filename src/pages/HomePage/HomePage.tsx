// pages/HomePage.tsx
import React, { useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Drawer from '../../components/Drawer/Drawer';
import Table from '../../components/Table/Table';
import List from '../../components/List/List';
import Tabs from '../../components/Tabs/Tabs';
import ExpansionPanels from '../../components/ExpansionPanels/ExpansionPanels';
import Card from '../../components/Card/Card';
import Snackbar from '../../components/Snackbar/Snackbar';
import Autocomplete from '../../components/Autocomplete/Autocomplete';
import Menu from '../../components/Menu/Menu';
import Typography from '../../components/Typography/Typography';
import Icons from '../../components/Icons/Icons';
import Tab from '../../components/Tab/Tab'; // Import the Tab component

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOptions = ['Option 1', 'Option 2', 'Option 3'];

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // TODO: this will be updated to fetch items from an API
  const items = ['Item 1', 'Item 2', 'Item 3'];

  // TODO: this will be updated to fetch items from an API
  const panelOptions = [
    { title: 'Panel 1', content: 'Content for Panel 1' },
    { title: 'Panel 2', content: 'Content for Panel 2' },
    // ... other panel options
  ];

  // TODO: this will be updated to fetch items from an API
  const cardData = {
    title: 'Card Title',
    content: 'Content for the card goes here.',
  };

  // TODO: this will be updated to fetch items from an API
  const snackbarMessage = 'This is a Snackbar message.';

  // TODO: this will be updated to fetch items from an API
  const suggestionList = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <AppBar />
      <Drawer />
      <Table />
      <List items={items} />
      
      {/* Updated usage of Tabs with Tab components */}
      <Tabs>
        <Tab label="Tab 1">Content for Tab 1</Tab>
        <Tab label="Tab 2">Content for Tab 2</Tab>
        <Tab label="Tab 3">Content for Tab 3</Tab>
      </Tabs>
      
      <ExpansionPanels panels={panelOptions} />
      <Card {...cardData} />
      <Snackbar message={snackbarMessage} />
      {/* Other content for the home page */}

      <Autocomplete suggestions={suggestionList} />

      {/* Use the Menu component */}
      <button onClick={handleOpenMenu}>Open Menu</button>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} options={menuOptions} onSelectOption={(option) => console.log(`Selected option: ${option}`)} />

      {/* Use the Typography component */}
      <Typography variant="h1" color="#333">
        Heading 1
      </Typography>
      <Typography variant="body" color="#555">
        This is a body text.
      </Typography>
      <Typography variant="caption" color="#777">
        A small caption.
      </Typography>

      {/* Use the Icons component with new icons */}
      <Icons name="coffee" size="medium" color="#333" />
      <Icons name="user" size="large" color="#555" />
      <Icons name="heart" size="small" color="#777" />
      <Icons name="star" size="medium" color="#FFD700" /> {/* Star icon */}
      <Icons name="envelope" size="medium" color="#4682B4" /> {/* Envelope icon */}
      <Icons name="check" size="medium" color="#008000" /> {/* Check icon */}
      <Icons name="times" size="medium" color="#FF0000" /> {/* Times icon */}
      <Icons name="cog" size="medium" color="#808080" /> {/* Cog icon */}
      <Icons name="home" size="medium" color="#4169E1" /> {/* Home icon */}
      <Icons name="search" size="medium" color="#FF4500" /> {/* Search icon */}
    </div>
  );
};

export default HomePage;
