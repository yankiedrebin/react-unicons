import React from 'react';
import { Icon } from '../icon';

const UilServicemark: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M5.5,9h4a1,1,0,0,0,0-2h-4a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2h-4a1,1,0,0,0,0,2h4a3,3,0,0,0,0-6h-2a1,1,0,0,1,0-2ZM21.42,7.62a1,1,0,0,0-.54-.54,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21L17,10.09l-2.79-2.8a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.54.54A1,1,0,0,0,12.5,8v8a1,1,0,0,0,2,0V10.41l1.79,1.8a1,1,0,0,0,1.42,0l1.79-1.8V16a1,1,0,0,0,2,0V8A1,1,0,0,0,21.42,7.62Z" />
    </svg>
  );
};

export default UilServicemark;