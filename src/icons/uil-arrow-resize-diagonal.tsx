import React from 'react';
import { Icon } from '../icon';

const UilArrowResizeDiagonal: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21.92,2.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L4,18.59V15a1,1,0,0,0-2,0v6a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H9a1,1,0,0,0,0-2H5.41L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z" />
    </svg>
  );
};

export default UilArrowResizeDiagonal;