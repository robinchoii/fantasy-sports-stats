import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import RunningBack from './RunningBack';
import PlayerModal from './PlayerModal';
import { MyContext } from '../../App';

export default class RunningBackContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RBs: [],
            years: ['2014','2015','2016','2017', '2018']
        }
    }

    componentDidMount = () => {
        console.log('RB container mounted!')
        let config = {
            auth: {
                username: 'e1c3c9b7-346a-4e73-a4ea-dc799d',
                password: 'MYSPORTSFEEDS'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json?season=2014-regular-2018-regular&position=rb", config)
            .then((response) => {
                let updatedRBs = Object.assign([], this.state.RBs);

                response.data.players.filter((player) => player.player.primaryPosition === 'RB').map((player,key) => {
                    let runningback = {}

                    runningback.key = key
                    runningback.firstName = player.player.firstName
                    runningback.lastName = player.player.lastName
                    runningback.id = player.player.id
                    // runningback.gamelogs = {}

                    updatedRBs.push(runningback);
                });

                this.setState({
                    RBs: updatedRBs
                })
                return updatedRBs

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

        return axios.get(`https://api.mysportsfeeds.com/v2.0/pull/nfl/${year}-regular/player_gamelogs.json?player=${first}-${last}-${id}&stats=Passing.yds,Passing.td,Passing.int,Receiving.tgt,Receiving.rec,Receiving.yds,Receiving.td,Rushing.att,Rushing.yds,Rushing.td,Fumbles.Lost,2PT.2PTMade`, config)
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
                <h1>Running Backs 2014-2018</h1>
                <div className='sub-content'>
                    <div className='wr-wrapper position-wrapper'>
                        {this.state.RBs.map((player, key) =>
                                <RunningBack
                                    key={key}
                                    firstName={player.firstName}
                                    lastName={player.lastName}
                                    playerID={player.id}
                                />
                        )}
                    </div>
                    <MyContext.Consumer>
                        {(context)=> (
                            <Route path="/rb/:first-:last-:id" render={(props) => <PlayerModal {...props} getPlayerGamelog={this.getPlayerGamelog} convertToFantasyPoints={context.convertToFantasyPoints} years={this.state.years} /> } />
                        )}
                    </MyContext.Consumer>
                </div>
            </div>
        );
    }
}
