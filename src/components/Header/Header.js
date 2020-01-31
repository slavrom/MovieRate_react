import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import './HeaderStyle.css';

function Header() {
  return (
    <div className='header'>
      <div className='headerInfo'>
        <div>
          <Link className='movieRateLink' to='/'>
            <h1>
              Movie<span className='brand'>Rate</span>
            </h1>
          </Link>
        </div>
        <nav className='nav'>
          <NavLink
            className='navLink'
            activeClassName='activeNavLink'
            to='/search'
          >
            <h4>
              <i className='fas fa-search' />
            </h4>
          </NavLink>
          <NavLink
            className='navLink'
            activeClassName='activeNavLink'
            to='/rate'
          >
            <h4>Rate</h4>
          </NavLink>
          <NavLink
            className='navLink'
            activeClassName='activeNavLink'
            to='/mylist'
          >
            <h4>MyList</h4>
          </NavLink>
        </nav>
      </div>
      <LogIn />
    </div>
  );
}

export default Header;
