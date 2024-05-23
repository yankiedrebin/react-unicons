import React from 'react';

const UilPoundCircle: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M16,15H10.82A3,3,0,0,0,11,14V13h2.5a1,1,0,0,0,0-2H11V10a1.95,1.95,0,0,1,3.63-1,1,1,0,0,0,1.74-1A4,4,0,0,0,9,10V11H8a1,1,0,0,0,0,2H9v1a1,1,0,0,1-1,1,1,1,0,0,0,0,2h8a1,1,0,0,0,0-2ZM12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" />
    </svg>
  );
};

export default UilPoundCircle;