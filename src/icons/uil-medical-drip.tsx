import React from 'react';

const UilMedicalDrip: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M17,6H15V4h2a1,1,0,0,0,0-2H9A5,5,0,0,0,4,7V21a1,1,0,0,0,2,0V7A3,3,0,0,1,9,4h4V6H11A3,3,0,0,0,8,9v4.93a3,3,0,0,0,1.34,2.5L11,17.54V18a2,2,0,0,0,2,2v1a1,1,0,0,0,2,0V20a2,2,0,0,0,2-2v-.46l1.66-1.11A3,3,0,0,0,20,13.93V9A3,3,0,0,0,17,6Zm-1,5h2v1H17a1,1,0,0,0,0,2h1a1,1,0,0,1-.44.76l-2.1,1.41A1,1,0,0,0,15,17v1H13V17a1,1,0,0,0-.45-.83l-2.1-1.41a1,1,0,0,1-.45-.83V9a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1H16a1,1,0,0,0,0,2Z" />
    </svg>
  );
};

export default UilMedicalDrip;