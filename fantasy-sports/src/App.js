import React, { Component } from 'react';
import './App.css';
import QuarterBackContainer from './components/2017/quarterBackContainer';
import WideReceiverContainer from './components/2017/wideReceiverContainer';
import RunningBackContainer from './components/2017/runningBackContainer';
import TightEndContainer from './components/2017/tightEndContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Fantasy Sports Stats to Graph</h1>
        </header>

        <QuarterBackContainer />

      </div>
    );
  }
}

export default App;
