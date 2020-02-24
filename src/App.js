// Libraries......
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Components.....
import HomePage from '../src/pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/about-page.component';

// Stylesheet.....
import './App.css';

const App = () => ( 
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route path='/about'>
                    <AboutPage/>
                </Route>
            </Switch>
        </div>
    </Router>
);

export default App;