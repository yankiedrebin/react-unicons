import React from 'react';
import { Icon } from '../icon';

const UilGrid: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V16h7Zm0-6H4V10h7Zm9,6H13V16h7Zm0-6H13V10h7Zm0-6H4V4H20Z" />
    </svg>
  );
};

export default UilGrid;