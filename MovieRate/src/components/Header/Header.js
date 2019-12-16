import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderStyle.css'

function Header() {
  return (
    <div className='header'>
      <div className='headerInfo'>
        <div>
          <Link className='movieRateLink' to="/">
            <h1>MovieRate</h1>
          </Link>
        </div>
        <nav className='nav'>
          <NavLink className='navLink'  activeClassName='activeNavLink' to="/rate">
            <h4>Rate</h4>
          </NavLink>
          <NavLink className='navLink' activeClassName='activeNavLink' to="/mylist">
            <h4>MyList</h4>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
