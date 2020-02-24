// Libraries......
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components.....
import Navigbar from './components/navbar/navbar.component';

// Nav-Pages......
import HomePage from '../src/pages/homepage/homepage.component';
import ShopPage from '../src/pages/shoppage/shop-page.component';
import HatsPage from './pages/hatspage/hatspage.component';
import JacketsPage from './pages/jackets/jackets-page.component';
import SneakersPage from './pages/sneakers/sneakers-page.component';
import MenPage from './pages/menpage/men-page.component';
import WomenPage from './pages/womenpage/women-page.components';
import AboutPage from './pages/aboutpage/about-page.component';
import ContactPage from './pages/contactpage/contact-page.component';
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
                <Route exact path='/shop'>
                    <ShopPage/>
                </Route>
                <Route path='/hats'>
                    <HatsPage/>
                </Route>
                <Route path='/jackets'>
                    <JacketsPage/>
                </Route>
                <Route path='/sneakers'>
                    <SneakersPage/>
                </Route>
                <Route path='/mens'>
                    <MenPage/>
                </Route>
                <Route path='/womens'>
                    <WomenPage/>
                </Route>
                <Route path='/contact'>
                    <ContactPage/>
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