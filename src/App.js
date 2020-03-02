// Libraries......
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from '../src/Firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// Components.....
import Navigbar from './components/navbar/navbar.component';
import Footer from './components/footer/footer.component';

// Redux configs..
import setCurrentUser from './redux/user/user.actions';

// Nav-Pages......
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shoppage/shop-page.component';
import SignInSignUpPage from '../src/pages/signin-and-signup/signin-and-signup.component';
import CheckoutPage from './pages/checkoutpage/checkout.component';

import AboutPage from './pages/aboutpage/about-page.component';
import ErrorPage from './pages/errorpage/error-page.component';

// Stylesheet.....
import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component { 

    unsubscribeFromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
    
            userRef.onSnapshot(snapShot => {
                setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
                });
            });
            }
        setCurrentUser(null);
        });
    }
    componentWillUnmount(){
        //this.unsubscribeFromAuth();
    }

    render(){
        return (
            <Router>
                <div><Navigbar/></div>
                <div>
                    <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/signinup' 
                        render={() => this.props.currentUser ? 
                            ( <Redirect to='/' /> ) 
                            :
                            (<SignInSignUpPage />)
                        }
                    />
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route path='/about' component={AboutPage} />
                    <Route path='/*' component={ErrorPage} />
                </Switch>
            </div>
            <div><Footer/></div>
        </Router>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  });  

export default connect(mapStateToProps, mapDispatchToProps)(App);