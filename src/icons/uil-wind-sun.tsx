import React from 'react';
import { Icon } from '../icon';

const UilWindSun: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M11,4.5a.99943.99943,0,0,0,1-1v-1a1,1,0,0,0-2,0v1A.99943.99943,0,0,0,11,4.5Zm-7,7a.99943.99943,0,0,0-1-1H2a1,1,0,0,0,0,2H3A.99943.99943,0,0,0,4,11.5Zm.63574,4.9502-.707.707a.99989.99989,0,1,0,1.41406,1.41406l.707-.707A.99989.99989,0,1,0,4.63574,16.4502Zm0-9.9004A.99989.99989,0,0,0,6.0498,5.13574l-.707-.707A.99989.99989,0,0,0,3.92871,5.84277Zm12.02149.293a.99672.99672,0,0,0,.707-.293l.707-.707a.99989.99989,0,1,0-1.41406-1.41406l-.707.707a1,1,0,0,0,.707,1.707ZM13,12a.99943.99943,0,0,0,1,1h5a3.00328,3.00328,0,0,0,3-3,1,1,0,0,0-2,0,1.01348,1.01348,0,0,1-1,1H14A.99943.99943,0,0,0,13,12Zm7,3H15a1,1,0,0,0,0,2h5a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6ZM9,19a1,1,0,1,0,1,1A1,1,0,0,0,9,19Zm6,0H13a1,1,0,0,0,0,2h2a1.01348,1.01348,0,0,1,1,1,1,1,0,0,0,2,0A3.00328,3.00328,0,0,0,15,19Zm-4-4a3.5,3.5,0,0,1,0-7,3.41539,3.41539,0,0,1,2.1875.77441,1.00008,1.00008,0,1,0,1.26562-1.54882A5.39339,5.39339,0,0,0,11,6a5.5,5.5,0,0,0,0,11,1,1,0,0,0,0-2Z" />
    </svg>
  );
};

export default UilWindSun;