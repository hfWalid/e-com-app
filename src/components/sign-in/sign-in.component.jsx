// Libraries....
import React from 'react';

// DataSources...
import {signInWithGoogle} from '../../Firebase/firebase.utils';

// Components....
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

// StyleSheet....
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }

  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return(
      <div className='sign-in'>
        <br/>
        <h2>I'm a customer</h2>
        <span>Or Log-in faster with your google acount</span>
        <form onSubmit={this.handleSubmit}>
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
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton><br/>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Google Log in
            </CustomButton>
          </div>
        </form>
    </div>
    )
  }
}

SignIn.propTypes = {};

export default SignIn;