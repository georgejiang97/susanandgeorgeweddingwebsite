import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Schedule />
      <Gallery />
      <RSVP />
    </div>
  );
}

export default App;
