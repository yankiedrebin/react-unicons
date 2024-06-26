import React from 'react';
import { Icon } from '../icon';

const UilWebGridAlt: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V10h7Zm9,0H13V10h7ZM20,8H4V4H20Z" />
    </svg>
  );
};

export default UilWebGridAlt;