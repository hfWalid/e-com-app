// Libraries......
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// Components.....
import App from './App';

// Stylesheet.....
import './index.css';


ReactDOM.render(
    //Provider is the parent component that takes the store as props and provide 
    //the global state for each component through the connect method
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
