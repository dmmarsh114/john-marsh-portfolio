import React from 'react';
import './Components/css/App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Components/Header';
import BitsyStories from './Components/BitsyStories';
import About from './Components/About';
import AlsoBy from './Components/AlsoBy';
import Footer from './Components/Footer';

function App() {

  return (
    <div id='bootstrap-overrides'>
      <Router>
        <Route exact path='/'>
          <Header />
          <BitsyStories />
          {/* <hr style={{ borderTop: '1px solid black', width: '70%' }} /> */}
          <About />
          <Footer />
        </Route>

        <Route exact path='/other-works'>
          <AlsoBy />
        </Route>
      </Router>
    </div>
  );
}

export default App;
