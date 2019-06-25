import React, { Component } from 'react';
import { render } from 'react-dom';

/* Components */
import Header from './Header';

/* SCSS files */
import '../scss/App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
