import React from 'react';

const UilDiary: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M17,2H5A1,1,0,0,0,4,3V19a1,1,0,0,0,1,1H6v1a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V20h9a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2ZM14,18H6V4h8Zm4-1a1,1,0,0,1-1,1H16V4h1a1,1,0,0,1,1,1Z" />
    </svg>
  );
};

export default UilDiary;