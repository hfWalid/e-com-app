// Libraries....
import React from 'react';

// Components....

// StyleSheet....
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {};

export default CustomButton;