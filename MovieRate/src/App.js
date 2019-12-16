import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Rate from './components/Rate/Rate';
import MyList from './components/MyList/MyList';
import Footer from './components/Footer/Footer';
import StartPage from './components/StartPage/StartPage'

function App() {
  // const [] = useState('');

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/rate" component={Rate} />
          <Route path="/mylist" component={MyList} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
