import React from 'react';
import { Icon } from '../icon';

const UilNoEntry: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,20H19.76L15.37,4.2A3,3,0,0,0,12.48,2h-1A3,3,0,0,0,8.63,4.2L4.24,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM10.56,4.73a1,1,0,0,1,1-.73h1a1,1,0,0,1,1,.73L14.35,8H9.65ZM9.09,10h5.82L16,14H8ZM6.32,20l1.11-4h9.14l1.11,4Z" />
    </svg>
  );
};

export default UilNoEntry;