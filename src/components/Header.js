import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
class Header extends Component {
  render() {
    return (
       <nav className="menu">
        <ul className="menu__links">
          <li className="menu__link"><Link to='/'>Home</Link></li>
          <li className="menu__link"><Link to='/create'>Create</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
