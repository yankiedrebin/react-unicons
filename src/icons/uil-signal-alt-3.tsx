import React from 'react';
import { Icon } from '../icon';

const UilSignalAlt3: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M14,9H10a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,14,9ZM13,21H11V11h2ZM22,1H18a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,21H19V3h2ZM6,15H2a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H6a1,1,0,0,0,1-1V16A1,1,0,0,0,6,15ZM5,21H3V17H5Z" />
    </svg>
  );
};

export default UilSignalAlt3;