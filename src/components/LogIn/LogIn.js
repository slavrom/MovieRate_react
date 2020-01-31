import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearList } from '../../actions';
import './LogInStyle.css';

function LogIn() {
  const [userImg, setUserImg] = useState();
  const [userName, setUserName] = useState();
  const [logOut, setLogOut] = useState(false);
  const dispatch = useDispatch();

  const clearMovieList = () => dispatch(clearList());

  useEffect(() => {
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init({
        client_id:
          '575163468058-jicuvu168f9nfkqjlsj0oclh13ggdn4d.apps.googleusercontent.com'
      });
    });
    if (localStorage.getItem('googleUserName')) {
      const userName = JSON.parse(localStorage.getItem('googleUserName'));
      setUserName(userName);
    }
    if (localStorage.getItem('googleUserImg')) {
      const userImage = JSON.parse(localStorage.getItem('googleUserImg'));
      setUserImg(userImage);
    }
  }, []);

  function logOutSwitch() {
    setLogOut(!logOut);
  }

  function signIn() {
    const authOk = user => {
      localStorage.setItem('googleUserImg', JSON.stringify(user.getBasicProfile().getImageUrl()));
      localStorage.setItem('googleUserName', JSON.stringify(user.getBasicProfile().getName()));
      const userImage = JSON.parse(localStorage.getItem('googleUserImg'));
      const userName = JSON.parse(localStorage.getItem('googleUserName'));
      setUserImg(userImage);
      setUserName(userName);
    };
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signIn({
      scope: 'profile email'
    }).then(authOk, err => console.log(err));
  }

  function signOut() {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signOut().then(
      () => console.log('signOut OK'),
      err => console.log(err)
    );
    setUserImg('');
    setLogOut(false);
    clearMovieList();
    localStorage.clear();
  }

  return (
    <React.Fragment>
      {userImg ? (
        <div className='userBar'>
          <img
            className='userImg'
            title={userName}
            src={userImg}
            alt='userIcon'
            onClick={logOutSwitch}
          />
          {logOut && (
            <h3 className='signInBtn moveBtn' title='Log out'>
              <i className='fas fa-sign-out-alt' onClick={signOut}></i>
            </h3>
          )}
        </div>
      ) : (
        <h3 className='signInBtn' onClick={signIn} title='Log in'>
          <i className='fas fa-sign-in-alt'></i>
        </h3>
      )}
    </React.Fragment>
  );
}

export default LogIn;
