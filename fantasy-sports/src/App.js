import React, { Component } from 'react';
import './App.css';
import PlayersContainer from './components/2017/playersContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Fantasy Sports Stats to Graph</h1>
        </header>

        <PlayersContainer />
      </div>
    );
  }
}

export default App;
