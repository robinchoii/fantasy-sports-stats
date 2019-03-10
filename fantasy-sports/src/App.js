import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import QuarterBackContainer from './components/quarterbacks/QuarterBackContainer';
import WideReceiverContainer from './components/wide-receivers/WideReceiverContainer';
import RunningBackContainer from './components/runningbacks/RunningBackContainer';
import TightEndContainer from './components/tight-ends/TightEndContainer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Settings from './components/Settings';


export const MyContext = React.createContext();

class SettingsProvider extends Component {
    state = {
        name: 'robin',
        settings:  {
            passYd: 25,
            passTD: 4,
            int: -1,
            reception: .5,
            recYd: 10,
            recTD: 6,
            rushYd : 10,
            rushTD: 6,
            fumbleLost: -2,
            twoPoint: 2
        },
    }

    render() {
        return (
            <MyContext.Provider value={{
              state: this.state,
              handleScoringChange:  (event) => {
                let updatedSettings = Object.assign({}, this.state.settings)

                if (event.target.innerHTML === ".5 PPR") {
                    updatedSettings.reception = .5

                    this.setState({
                        settings: updatedSettings
                    })
                } else if(event.target.innerHTML === "1 PPR") {
                    updatedSettings.reception = 1

                    this.setState({
                        settings: updatedSettings
                    })
                } else {
                    updatedSettings.reception = 0

                    this.setState({
                        settings: updatedSettings
                    })

                }

            },
            convertToFantasyPoints: (passYds, passTds, int, rec, recYds, recTds, rushYds, rushTds, fumLost, twoPoint ) => {
                let fantasyPoints = 0;

                fantasyPoints += passYds / this.state.settings.passYd;
                fantasyPoints += passTds * this.state.settings.passTD;
                fantasyPoints += int * this.state.settings.int;
                fantasyPoints += rec * this.state.settings.reception;
                fantasyPoints += recYds / this.state.settings.recYd;
                fantasyPoints += recTds * this.state.settings.recTD;
                fantasyPoints += rushYds / this.state.settings.rushYd;
                fantasyPoints += rushTds * this.state.settings.rushTD;
                fantasyPoints += fumLost * this.state.settings.fumbleLost;
                fantasyPoints += twoPoint * this.state.settings.twoPoint;

                return Math.ceil(fantasyPoints * 100) / 100;
            }

            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

class App extends Component {
  render() {
    return (
      <SettingsProvider>
        <BrowserRouter>
          <div id="app">
            <Header />
            <Navigation />
              <Switch >
                <Route path='/' component={Main} exact />
                <Route path='/qb' component={QuarterBackContainer} />
                <Route path='/wr' component={WideReceiverContainer} />
                <Route path='/rb' component={RunningBackContainer} />
                // <Route path='/te' component={TightEndContainer} />
                <Route path='/settings' component={Settings} />
              </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </SettingsProvider>
    );
  }
}

export default App;
