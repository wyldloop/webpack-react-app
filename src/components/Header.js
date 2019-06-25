import React, { Component } from 'react';
import { render } from 'react-dom';

/* Components */
import Nav from './Nav';
import MobileNav from './MobileNav';


class Header extends Component {

  render(){
    return (
      <section>
      <div>
        <div>
          <Nav />
        </div>
      </div>
      <MobileNav />
      </section>
    );
  }
}

export default Header;
