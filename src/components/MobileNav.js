import React, { Component } from 'react';
import { render } from 'react-dom';

/* Components */
import Nav from './Nav';

class MobileNav extends Component {

  render(){
    return (
      <div id="mobile-nav">
        <Nav />
      </div>
    );
  }
}

export default MobileNav;
