import React from 'react';
import './App.css';

import HomePage from '../src/homepage.component';

class App extends React.Component {
  constructor(){
    super();
    console.log('Constructor !');
  }

  render(){
    return(
      <HomePage/>
    )
  }
}

export default App;