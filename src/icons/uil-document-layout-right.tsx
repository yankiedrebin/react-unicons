import React from 'react';

const UilDocumentLayoutRight: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M13,18H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2ZM3,8h8a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm0,4h8a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM21,4H15a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4Zm-1,6H16V6h4Z" />
    </svg>
  );
};

export default UilDocumentLayoutRight;