import React from 'react';
import { Icon } from '../icon';

const UilShrink: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M10.71,11.29l-2.5-2.5a1,1,0,1,0-1.42,1.42l.8.79H3a1,1,0,0,0,0,2H7.59l-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2.5-2.5a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76A1,1,0,0,0,10.71,11.29ZM21,11H16.41l.8-.79a1,1,0,0,0-1.42-1.42l-2.5,2.5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l2.5,2.5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.8-.79H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilShrink;