import React from 'react';
import { Icon } from '../icon';

const UilArrowCircleRight: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M15.71,12.71a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L12.59,11H9a1,1,0,0,0,0,2h3.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0ZM22,12A10,10,0,1,0,12,22,10,10,0,0,0,22,12ZM4,12a8,8,0,1,1,8,8A8,8,0,0,1,4,12Z" />
    </svg>
  );
};

export default UilArrowCircleRight;