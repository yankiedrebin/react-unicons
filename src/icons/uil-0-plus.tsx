import React from 'react';
import { Icon } from '../icon';

const Uil0Plus: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M18,5h1V6a1,1,0,0,0,2,0V5h1a1,1,0,0,0,0-2H21V2a1,1,0,0,0-2,0V3H18a1,1,0,0,0,0,2ZM12.5,6h-1a3,3,0,0,0-3,3v6a3,3,0,0,0,3,3h1a3,3,0,0,0,3-3V9A3,3,0,0,0,12.5,6Zm1,9a1,1,0,0,1-1,1h-1a1,1,0,0,1-1-1V9a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1Zm8.1-6a1,1,0,0,0-.78,1.18,9,9,0,1,1-7-7,1,1,0,1,0,.4-2A10.8,10.8,0,0,0,12,1,11,11,0,1,0,23,12a10.8,10.8,0,0,0-.22-2.2A1,1,0,0,0,21.6,9Z" />
    </svg>
  );
};

export default Uil0Plus;