import React from 'react';

const UilEuroCircle: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Zm.59-13.33a3.34,3.34,0,0,1,2.62,1.38,1,1,0,0,0,1.4.19,1,1,0,0,0,.18-1.41,5.32,5.32,0,0,0-4.2-2.16A5.57,5.57,0,0,0,7.46,9.5H6a1,1,0,0,0,0,2H7c0,.17,0,.33,0,.5s0,.33,0,.5H6a1,1,0,0,0,0,2H7.46a5.57,5.57,0,0,0,5.13,3.83,5.32,5.32,0,0,0,4.2-2.16A1,1,0,1,0,15.21,15a3.34,3.34,0,0,1-2.62,1.38A3.42,3.42,0,0,1,9.67,14.5H12a1,1,0,0,0,0-2H9.05A4.23,4.23,0,0,1,9,12a4.23,4.23,0,0,1,.05-.5H12a1,1,0,0,0,0-2H9.67A3.42,3.42,0,0,1,12.59,7.67Z" />
    </svg>
  );
};

export default UilEuroCircle;