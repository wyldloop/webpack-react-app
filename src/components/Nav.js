import React, { Component } from 'react';
import { render } from 'react-dom';

/* Components */
import NavItems from './NavItems';

class Nav extends Component {

  render(){
    return (
      <nav>
        <NavItems />
      </nav>
    );
  }
}

export default Nav;
