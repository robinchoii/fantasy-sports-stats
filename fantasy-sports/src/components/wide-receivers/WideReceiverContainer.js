import React from 'react';
import axios from 'axios';
import WideReceiver from './WideReceiver';
import PlayerModal from './PlayerModal';
import { Route } from 'react-router-dom';
import { MyContext } from '../../App'

export default class WideReceiverContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            WRs: [],
            years: ['2014','2015','2016','2017', '2018'],
        }
    }

    componentDidMount = () => {
        let config = {
            auth: {
                username: 'e1c3c9b7-346a-4e73-a4ea-dc799d',
                password: 'MYSPORTSFEEDS'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json?season=2014-regular-2018-regular&position=wr", config)
            .then((response) => {
                let updatedWRs = Object.assign([], this.state.WR);

                response.data.players.filter((player) => player.player.primaryPosition === 'WR').map((player,key) => {
                    let receiver = {}

                    receiver.key = key
                    receiver.firstName = player.player.firstName
                    receiver.lastName = player.player.lastName
                    receiver.id = player.player.id
                    // receiver.gamelogs = {}

                    updatedWRs.push(receiver);
                });

                this.setState({
                    WRs: updatedWRs
                })
                return updatedWRs

            })
            .catch((err) => {
                console.log(err)
            })
    }
    componentWillUnmount = () => {
        console.log('unmounting')
    }

    getPlayerGamelog = (year, first, last, id) => {
        console.log("getting game logs")

        let config = {
            auth: {
                username: 'e1c3c9b7-346a-4e73-a4ea-dc799d',
                password: 'MYSPORTSFEEDS'
              },
        };

        return axios.get(`https://api.mysportsfeeds.com/v2.0/pull/nfl/${year}-regular/player_gamelogs.json?player=${first}-${last}-${id}&stats=Passing.yds,Passing.td,Passing.int,Receiving.tgt,Receiving.rec,Receiving.yds,Receiving.td,Rushing.yds,Rushing.td,Fumbles.Lost,2PT.2PTMade`, config)
            .then((response) => {
                let updatedGamelogs = Object.assign({}, this.state.gamelogs);
                updatedGamelogs = response.data.gamelogs

                return updatedGamelogs
            })
            .catch((err) => {
                console.log(err)
            })

    }
    render() {
        return (
            <div className='main-container'>
                <h1>Wide Receivers 2014-2018</h1>
                <div className='sub-content'>
                    <div className='wr-wrapper position-wrapper'>
                        {this.state.WRs.map((player, key) =>
                                <WideReceiver
                                    key={key}
                                    firstName={player.firstName}
                                    lastName={player.lastName}
                                    playerID={player.id}
                                    getPlayerGameLog={this.handleGetPlayerGamelog}
                                />
                        )}
                    </div>
                    <MyContext.Consumer>
                        {(context) => (
                            <Route path="/wr/:first-:last-:id" render={(props) => <PlayerModal {...props} getPlayerGamelog={this.getPlayerGamelog} convertToFantasyPoints={context.convertToFantasyPoints} years={this.state.years} /> } />
                        )}
                    </MyContext.Consumer>
                </div>
            </div>
        );
    }
}
