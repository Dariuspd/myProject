import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Hello React
          </h2>
          <a
            href="/auth/google"
          >
            Sign In
          </a>
        </header>
      </div>
    );
  }
}

export default App;
