import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import QuarterBackContainer from './components/quarterbacks/QuarterBackContainer';
import WideReceiverContainer from './components/wide-receivers/WideReceiverContainer';
import RunningBackContainer from './components/runningbacks/RunningBackContainer';
import TightEndContainer from './components/2017/tightEndContainer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Settings from './components/Settings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app">
          <Header />
          <Navigation />
          <Switch >
            <Route path='/' component={Main} exact />
            <Route path='/qb' component={QuarterBackContainer} />
            <Route path='/wr' component={WideReceiverContainer} />
            <Route path='/rb' component={RunningBackContainer} />
            <Route path='/te' component={TightEndContainer} />
            <Route path='/settings' component={Settings} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
