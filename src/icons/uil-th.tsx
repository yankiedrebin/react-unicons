import React from 'react';
import { Icon } from '../icon';

const UilTh: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM11,20H4V13h7Zm0-9H4V4h7Zm9,9H13V13h7Zm0-9H13V4h7Z" />
    </svg>
  );
};

export default UilTh;