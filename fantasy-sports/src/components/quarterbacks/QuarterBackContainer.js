import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import QuarterBack from './QuarterBack';
import PlayerModal from './PlayerModal';

export default class QuarterBackContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            QBs: [],
            years: ['2014','2015','2016','2017', '2018'],
            scoring:  {
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
    convertToFantasyPoints = (passYds, passTds, int, rec, recYds, recTds, rushYds, rushTds, fumLost, twoPoint ) => {
        let fantasyPoints = 0;

        fantasyPoints += passYds / this.state.scoring.passYd;
        fantasyPoints += passTds * this.state.scoring.passTD;
        fantasyPoints += int * this.state.scoring.int;
        fantasyPoints += rec * this.state.scoring.reception;
        fantasyPoints += recYds / this.state.scoring.recYd;
        fantasyPoints += recTds * this.state.scoring.recTD;
        fantasyPoints += rushYds / this.state.scoring.rushYd;
        fantasyPoints += rushTds * this.state.scoring.rushTD;
        fantasyPoints += fumLost * this.state.scoring.fumbleLost;
        fantasyPoints += twoPoint * this.state.scoring.twoPoint;

        return Math.ceil(fantasyPoints * 100) / 100;
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
            <div>
                <h1>Quarterbacks from 2014-2018</h1>
                <div className='sub-content'>
                    <div className='wr-wrapper'>
                        {this.state.QBs.map((player, key) =>
                                <QuarterBack
                                    key={key}
                                    firstName={player.firstName}
                                    lastName={player.lastName}
                                    playerID={player.id}
                                />
                        )}
                    </div>
                    <Route path="/qb/:first-:last-:id" render={(props) => <PlayerModal {...props} getPlayerGamelog={this.getPlayerGamelog} convertToFantasyPoints={this.convertToFantasyPoints} years={this.state.years} /> } />
                </div>
            </div>
        )
    }
}