// Libraries....
import React from 'react';

// Components...
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// Stylesheets..
import './signin-and-signup.styles.scss';

const SignInSignUpPage = () => {
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInSignUpPage;