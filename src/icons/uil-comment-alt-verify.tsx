import React from 'react';
import { Icon } from '../icon';

const UilCommentAltVerify: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M15.71,6.29l-5.3,5.3L8.29,9.47a1,1,0,1,0-1.41,1.41l2.83,2.83a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29l6-6a1,1,0,0,0,0-1.42A1,1,0,0,0,15.71,6.29ZM19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
    </svg>
  );
};

export default UilCommentAltVerify;