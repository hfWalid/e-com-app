// Libraries....
import React from 'react';

// Components....

// StyleSheet....
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {};

export default CustomButton;