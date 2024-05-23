import React from 'react';

const UilBorderBottom: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,13.5a1,1,0,1,0-1-1A1,1,0,0,0,12,13.5Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,12,17.5Zm0-8a1,1,0,1,0-1-1A1,1,0,0,0,12,9.5Zm-4-4a1,1,0,1,0-1-1A1,1,0,0,0,8,5.5Zm0,8a1,1,0,1,0-1-1A1,1,0,0,0,8,13.5Zm12-8a1,1,0,1,0-1-1A1,1,0,0,0,20,5.5Zm-4,8a1,1,0,1,0-1-1A1,1,0,0,0,16,13.5Zm-4-8a1,1,0,1,0-1-1A1,1,0,0,0,12,5.5Zm4,0a1,1,0,1,0-1-1A1,1,0,0,0,16,5.5Zm4,10a1,1,0,1,0,1,1A1,1,0,0,0,20,15.5Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,20,11.5Zm0,8H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Zm0-12a1,1,0,1,0,1,1A1,1,0,0,0,20,7.5Zm-16,6a1,1,0,1,0-1-1A1,1,0,0,0,4,13.5Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,4,9.5Zm0,8a1,1,0,1,0-1-1A1,1,0,0,0,4,17.5Zm0-12a1,1,0,1,0-1-1A1,1,0,0,0,4,5.5Z" />
    </svg>
  );
};

export default UilBorderBottom;