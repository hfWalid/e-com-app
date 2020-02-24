// Libraries......
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components.....
import Navigbar from './components/navbar/navbar.component';
import HomePage from '../src/pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/about-page.component';
import ErrorPage from './pages/errorpage/error-page.component';

// Stylesheet.....
import './App.css';

const App = () => ( 
    <Router>
        <div>
            <Navigbar/>
        </div>
        <div>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route path='/about'>
                    <AboutPage/>
                </Route>
                <Route path='/*'>
                    <ErrorPage/>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;