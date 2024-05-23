import React from 'react';

const UilEnvelopes: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M17,21.63H5a3,3,0,0,1-3-3v-8a1,1,0,0,0-2,0v8a5,5,0,0,0,5,5H17a1,1,0,0,0,0-2Zm4-18H7a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3v-10A3,3,0,0,0,21,3.63Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L7.41,5.63Zm1.41,11a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7l5.88,5.88a3,3,0,0,0,4.24,0L22,7Z" />
    </svg>
  );
};

export default UilEnvelopes;