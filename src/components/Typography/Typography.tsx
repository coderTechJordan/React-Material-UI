// components/Typography/Typography.tsx
import React, { ReactNode } from 'react';
import { useTheme } from '../../themes/ThemeContext';
import { generateTextStyles } from '../../styles/Styles';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  color?: string; // Add color as an optional prop
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, color, children }) => {
  const theme = useTheme();
  const textColor = color || theme.primaryColor; // Use the provided color or fallback to theme color

  let fontSize = '';

  switch (variant) {
    case 'h1':
      fontSize = '2rem';
      break;
    case 'h2':
      fontSize = '1.8rem';
      break;
    case 'h3':
      fontSize = '1.6rem';
      break;
    case 'body':
      fontSize = '1rem';
      break;
    case 'caption':
      fontSize = '0.8rem';
      break;
    default:
      break;
  }

  const textStyle = {
    ...(variant.startsWith('h') && { fontWeight: 'bold' }),
    ...generateTextStyles(fontSize, textColor),
  };

  return <span style={textStyle}>{children}</span>;
};

export default Typography;
