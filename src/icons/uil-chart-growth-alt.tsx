import React from 'react';
import { Icon } from '../icon';

const UilChartGrowthAlt: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,20H4V18H7a1,1,0,0,0,0-2H4V14h7a1,1,0,0,0,0-2H4V10H15a1,1,0,0,0,0-2H4V6H19a1,1,0,0,0,0-2H4V3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilChartGrowthAlt;