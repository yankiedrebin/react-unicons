import React from 'react';

const UilChannel: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M20 16a3 3 0 0 0-1.73.56l-2.45-1.45A3.74 3.74 0 0 0 16 14a4 4 0 0 0-3-3.86V7.82a3 3 0 1 0-2 0v2.32A4 4 0 0 0 8 14a3.74 3.74 0 0 0 .18 1.11l-2.45 1.45A3 3 0 0 0 4 16a3 3 0 1 0 3 3 3 3 0 0 0-.12-.8l2.3-1.37a4 4 0 0 0 5.64 0l2.3 1.37A3 3 0 1 0 20 16ZM4 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm8-16a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 12a2 2 0 1 1 2-2 2 2 0 0 1-2 2Zm8 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
    </svg>
  );
};

export default UilChannel;