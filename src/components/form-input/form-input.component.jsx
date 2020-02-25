// Libraries....
import React from 'react';

// Components....

// StyleSheet....
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {};

export default FormInput;