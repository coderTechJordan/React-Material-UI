import React, { ReactNode } from 'react';
import { Grid as MuiGrid, GridSize, GridSpacing } from '@mui/material';

interface GridProps {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  columns?: number;
  gap?: string;
  spacing?: GridSpacing;
  justifyContent?: React.CSSProperties['justifyContent'];
}

const Grid: React.FC<GridProps> = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  columns = 2,
  gap = '16px',
  spacing,
  justifyContent,
}) => {
  if (container || item) {
    return (
      <MuiGrid
        container={container}
        item={item}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        spacing={spacing}
        justifyContent={justifyContent}
      >
        {children}
      </MuiGrid>
    );
  }

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
  };

  return <div style={gridStyles}>{children}</div>;
};

export default Grid;
