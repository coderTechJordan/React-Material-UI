// components/Icons/Icons.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faUser,
  faHeart,
  faStar,
  faEnvelope,
  faCheck,
  faTimes,
  faCog,
  faHome,
  faSearch,
  // Add more icons as needed
} from '@fortawesome/free-solid-svg-icons';

interface IconProps {
  name:
    | 'coffee'
    | 'user'
    | 'heart'
    | 'star'
    | 'envelope'
    | 'check'
    | 'times'
    | 'cog'
    | 'home'
    | 'search';
  // Add more icon names as needed
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const Icons: React.FC<IconProps> = ({ name, size = 'medium', color }) => {
  let iconComponent;

  switch (name) {
    case 'coffee':
      iconComponent = <FontAwesomeIcon icon={faCoffee} />;
      break;
    case 'user':
      iconComponent = <FontAwesomeIcon icon={faUser} />;
      break;
    case 'heart':
      iconComponent = <FontAwesomeIcon icon={faHeart} />;
      break;
    case 'star':
      iconComponent = <FontAwesomeIcon icon={faStar} />;
      break;
    case 'envelope':
      iconComponent = <FontAwesomeIcon icon={faEnvelope} />;
      break;
    case 'check':
      iconComponent = <FontAwesomeIcon icon={faCheck} />;
      break;
    case 'times':
      iconComponent = <FontAwesomeIcon icon={faTimes} />;
      break;
    case 'cog':
      iconComponent = <FontAwesomeIcon icon={faCog} />;
      break;
    case 'home':
      iconComponent = <FontAwesomeIcon icon={faHome} />;
      break;
    case 'search':
      iconComponent = <FontAwesomeIcon icon={faSearch} />;
      break;
    // Add more cases for other icons
    default:
      // Handle other icons or custom icons
      break;
  }

  const iconStyles = {
    fontSize: size === 'small' ? '16px' : size === 'medium' ? '24px' : '32px',
    color,
  };

  return <span style={iconStyles}>{iconComponent}</span>;
};

export default Icons;
