import React from 'react';
import { Icon } from '../icon';

const UilVerticalDistributionCenter: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,15H20V13a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1v2H3a1,1,0,0,0,0,2H4v2a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V17h1a1,1,0,0,0,0-2Zm-3,3H6V14H18ZM3,8H5V9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V8h2a1,1,0,0,0,0-2H19V5a1,1,0,0,0-1-1H6A1,1,0,0,0,5,5V6H3A1,1,0,0,0,3,8ZM7,6H17V8H7Z" />
    </svg>
  );
};

export default UilVerticalDistributionCenter;