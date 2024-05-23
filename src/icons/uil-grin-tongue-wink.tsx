import React from 'react';
import { Icon } from '../icon';

const UilGrinTongueWink: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17.62,9.13a3.08,3.08,0,0,0-4.24,0,1,1,0,0,0,1.41,1.41,1,1,0,0,1,1.42,0,1,1,0,0,0,1.41,0A1,1,0,0,0,17.62,9.13ZM9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm6,2H9a1,1,0,0,0,0,2,3,3,0,0,0,6,0,1,1,0,0,0,0-2Zm-3,3a1,1,0,0,1-1-1h2A1,1,0,0,1,12,16Z" />
    </svg>
  );
};

export default UilGrinTongueWink;