import React from 'react';

const UilRaindrops: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M10.5,8c0-3.49-3.3-5.74-3.44-5.83a1,1,0,0,0-1.12,0C5.8,2.27,2.5,4.55,2.5,8a4,4,0,0,0,8,0Zm-4,2a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72A5.39,5.39,0,0,1,8.5,8,2,2,0,0,1,6.5,10ZM18.06,2.17a1,1,0,0,0-1.12,0C16.8,2.27,13.5,4.55,13.5,8a4,4,0,0,0,8,0C21.5,4.51,18.2,2.26,18.06,2.17ZM17.5,10a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72A5.39,5.39,0,0,1,19.5,8,2,2,0,0,1,17.5,10Zm-4.44,2.17a1,1,0,0,0-1.12,0c-.14.1-3.44,2.38-3.44,5.83a4,4,0,0,0,8,0C16.5,14.51,13.2,12.26,13.06,12.17ZM12.5,20a2,2,0,0,1-2-2,5.44,5.44,0,0,1,2-3.72,5.39,5.39,0,0,1,2,3.72A2,2,0,0,1,12.5,20Z" />
    </svg>
  );
};

export default UilRaindrops;