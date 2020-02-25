// Libraries....
import React from 'react';

// Components....
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// StyleSheet....
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fullName:'',
      email:'',
      password:''
    }
  }
  
  
  render () {
    return (
      <div className="Sign-up">
        <br/>
        <h2>Become a customer</h2>
        <span>Create your account, and start shopping !</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='full-name'
            type='text'
            handleChange={this.handleChange}
            value={this.state.email}
            label='FullName Here'
            required
          />
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Repeat Password'
            required
          />
          <CustomButton type='submit'> Sign Up </CustomButton>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {};

export default SignUp;