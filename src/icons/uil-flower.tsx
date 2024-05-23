import React from 'react';

const UilFlower: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M19.68,6.88a4.4,4.4,0,0,0-3.31-.32,4.37,4.37,0,0,0-8.73,0,4.48,4.48,0,0,0-3.31.29,4.37,4.37,0,0,0,.61,8,4.4,4.4,0,0,0-.8,2.5,5,5,0,0,0,.07.75A4.34,4.34,0,0,0,8.5,21.73a4.68,4.68,0,0,0,.64,0A4.42,4.42,0,0,0,12,20a4.42,4.42,0,0,0,2.86,1.69,4.68,4.68,0,0,0,.64,0,4.36,4.36,0,0,0,3.56-6.87,4.36,4.36,0,0,0,.62-8ZM10.34,4.94a2.4,2.4,0,0,1,3.32,0,2.43,2.43,0,0,1,.52,2.66l-.26.59-.66.58A4.07,4.07,0,0,0,12,8.55a4,4,0,0,0-1.61.34L9.83,7.6A2.39,2.39,0,0,1,10.34,4.94Zm-6.1,6.84A2.37,2.37,0,0,1,7.94,9l.49.43.35.8A3.92,3.92,0,0,0,8,12.55,2.85,2.85,0,0,0,8,13l-.55,0h0l-.84.08A2.37,2.37,0,0,1,4.24,11.78Zm6.6,6.08a2.38,2.38,0,0,1-4.66-.08,3.07,3.07,0,0,1,0-.42,2.33,2.33,0,0,1,1.17-2L7.86,15l.91-.1a4,4,0,0,0,2.38,1.57ZM12,14.55a2,2,0,1,1,2-2A2,2,0,0,1,12,14.55Zm5.82,3.22a2.36,2.36,0,0,1-2.68,1.94,2.39,2.39,0,0,1-2-1.85l-.14-.6.21-.92a4,4,0,0,0,2.2-1.76l.5.3.09,0,.66.39A2.38,2.38,0,0,1,17.82,17.77Zm1.94-6a2.39,2.39,0,0,1-2.13,1.33h-.24L16.75,13,16,12.59v0a4,4,0,0,0-1-2.64l.43-.37,0,0L16.06,9a2.37,2.37,0,0,1,3.7,2.82Z" />
    </svg>
  );
};

export default UilFlower;