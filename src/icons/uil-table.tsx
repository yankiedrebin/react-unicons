import React from 'react';
import { Icon } from '../icon';

const UilTable: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8,20H4V16H8Zm0-6H4V10H8ZM8,8H4V4H8Zm6,12H10V16h4Zm0-6H10V10h4Zm0-6H10V4h4Zm6,12H16V16h4Zm0-6H16V10h4Zm0-6H16V4h4Z" />
    </svg>
  );
};

export default UilTable;