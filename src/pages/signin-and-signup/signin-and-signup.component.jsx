// Libraries....
import React from 'react';
import { connect } from 'react-redux';

// Components...
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

// Stylesheets..
import './signin-and-signup.styles.scss';
import { auth } from '../../Firebase/firebase.utils';

class SignInSignUpPage extends React.Component {
    render(){
        return(
            <div className='sign-in-and-sign-up'>
                <SignIn/>
                <SignUp/>
            </div>
        )
    }

    componentWillUnmount(){
        // const currentUser = this.props.user.currentUser;
        // currentUser.unsubscribeFromAuth();

        auth.signOut();
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps)(SignInSignUpPage);