import React from 'react';
import { Icon } from '../icon';

const UilLeftArrowFromLeft: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M17,11H5.41l2.3-2.29A1,1,0,1,0,6.29,7.29l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H17a1,1,0,0,0,0-2Zm4-7a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z" />
    </svg>
  );
};

export default UilLeftArrowFromLeft;