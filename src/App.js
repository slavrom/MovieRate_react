import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Rate from './components/Rate/Rate';
import MyList from './components/MyList/MyList';
import Footer from './components/Footer/Footer';
import StartPage from './components/StartPage/StartPage';
import Search from './components/Search/Search';

function App() {
  return (
    <Router>
      <div className='main'>
        <Header />
        <Switch>
          <Route exact path='/' component={StartPage} />
          <Route path='/rate' component={Rate} />
          <Route path='/mylist' component={MyList} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
