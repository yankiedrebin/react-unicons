import React from 'react';
import { Icon } from '../icon';

const UilClockTen: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,6a.99974.99974,0,0,0-1,1v3.26758L9.90234,9.63379a1.00016,1.00016,0,0,0-1,1.73242l2.59766,1.5A1,1,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Zm0-4A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z" />
    </svg>
  );
};

export default UilClockTen;