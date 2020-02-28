// Libraries......
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';


// Components.....
import App from './App';

// Stylesheet.....
import './index.css';


ReactDOM.render(
    //Provider is the parent component that takes the store as props and provide 
    //the global state for each component through the connect method
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
document.getElementById('root'));
