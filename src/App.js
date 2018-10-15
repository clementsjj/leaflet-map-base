import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AMap from './components/AMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AMap />
      </div>
    );
  }
}

export default App;
