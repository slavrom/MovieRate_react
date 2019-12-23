import React from 'react';
import { Link } from 'react-router-dom';
import './StartPageStyle.css';

function StartPage() {
  return (
    <div className='startBar'>
      <h1>MovieRate</h1>
      <p>
        This App will help you to find a movie to watch.
        <br />
        Create your own Rated Movie List and share with friends.
      </p>
      <button className='btns edit startBtn'>
        <Link to='/rate' className='startLink'>
          Get Started
        </Link>
      </button>
    </div>
  );
}

export default StartPage;
