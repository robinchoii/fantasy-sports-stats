import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import QuarterBack from './QuarterBack';
import PlayerModal from './PlayerModal';

import { MyContext } from "../../App"

export default class QuarterBackContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QBs: [],
            years: ['2014','2015','2016','2017', '2018'],
        }
    }

    componentDidMount = () => {
        console.log('qb container mounted!')
        let config = {
            auth: {
                username: 'e1c3c9b7-346a-4e73-a4ea-dc799d',
                password: 'MYSPORTSFEEDS'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json?season=2014-regular-2018-regular&position=qb", config)
            .then((response) => {
                let updatedQBs = Object.assign([], this.state.QB);

                response.data.players.filter((player) => player.player.primaryPosition === 'QB').map((player,key) => {
                    let receiver = {}

                    receiver.key = key
                    receiver.firstName = player.player.firstName
                    receiver.lastName = player.player.lastName
                    receiver.id = player.player.id
                    // receiver.gamelogs = {}

                    updatedQBs.push(receiver);
                });

                this.setState({
                    QBs: updatedQBs
                })
                return updatedQBs

            })
            .catch((err) => {
                console.log(err)
            })

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
                <h1>Quarterbacks 2014-2018</h1>
                <div className='sub-content'>
                    <div className='wr-wrapper position-wrapper'>
                        {this.state.QBs.map((player, key) =>
                                <QuarterBack
                                    key={key}
                                    firstName={player.firstName}
                                    lastName={player.lastName}
                                    playerID={player.id}
                                />
                        )}
                    </div>
                    <MyContext.Consumer>
                        {(context) => (
                            <Route path="/qb/:first-:last-:id" render={(props) => <PlayerModal {...props} getPlayerGamelog={this.getPlayerGamelog} convertToFantasyPoints={context.convertToFantasyPoints} years={this.state.years} /> } />
                        )}
                    </MyContext.Consumer>
                </div>
            </div>
        )
    }
}
