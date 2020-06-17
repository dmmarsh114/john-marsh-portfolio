import React from 'react';
import './Components/css/App.css';

import Header from './Components/Header';
import BitsyStories from './Components/BitsyStories';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      <Header />
      <BitsyStories />
      <hr style={{ borderTop: '1px solid black', width: '70%' }} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
