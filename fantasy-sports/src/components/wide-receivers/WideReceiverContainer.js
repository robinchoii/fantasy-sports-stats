import React from 'react';
import axios from 'axios';
import WideReceiver from './WideReceiver';
import PlayerModal from './PlayerModal';
import { Route } from 'react-router-dom';

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

                // console.log(updatedWRs)

                this.setState({
                    WRs: updatedWRs
                })
                return updatedWRs


                // this.setState({
                //     WRs: [{firstName: 'doug', lastName: 'baldwin', id:8292, gamelogs: {}},{firstName: 'doug', lastName: 'baldwin', id:8292, gamelogs:{}}]
                // })
                // return [{firstName: 'doug', lastName: 'baldwin', id:8292, gamelogs: {}},{firstName: 'doug', lastName: 'baldwin', id:8292, gamelogs: {}}]

            })
            // .then((response) => {
            //     console.log(response)
            //     response.map((player,key) => {
            //         let { firstName, lastName ,id } = player;

            //         this.state.years.map((year) => {
            //             player.gamelogs.year = this.getPlayerGamelog(year, firstName, lastName, id).bind(this);

            //         })

            //         console.log(this.props)
            //         console.log(firstName +  lastName)
            //         console.log(this.getPlayerGamelog(2014,firstName, lastName,id));
            //         console.log(this.state)
            //         console.log(this.getPlayerGamelog(2014, "doug", "baldwin", 8292));

            //         player.gamelogs['2014'] = this.getPlayerGamelog(2014, firstName, lastName, id);
            //         console.log(firstName,lastName,id)
            //     })
            // })
            .catch((err) => {
                console.log(err)
            })
    }

    handleOnClick = (first, last, id) => {
        console.log('wr click');
        console.log(first, last, id)
        let config = {
            auth: {
                username: 'e1c3c9b7-346a-4e73-a4ea-dc799d',
                password: 'MYSPORTSFEEDS'
              },
        };

        axios.get(`https://api.mysportsfeeds.com/v2.0/pull/nfl/2018-regular/player_gamelogs.json?player=${first}-${last}-${id}`, config)
            .then((response) => {
                // console.log(localStorage)
                // console.log(response.data)
                let updatedSelectedWR = Object.assign({}, this.state.selectedWR);
                updatedSelectedWR = response.data

                console.log(updatedSelectedWR)
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
            <div className='main-component'>
                <h1>Wide Receivers from 2014-2018</h1>
                <div className='sub-content'>
                    <div className='wr-wrapper'>
                        {this.state.WRs.map((player, key) =>
                                <WideReceiver
                                    key={key}
                                    firstName={player.firstName}
                                    lastName={player.lastName}
                                    playerID={player.id}
                                    getPlayerInfo={this.handleOnClick}
                                    getPlayerGameLog={this.handleGetPlayerGamelog}
                                />
                        )}
                    </div>
                    <Route path="/wr/:first-:last-:id" render={(props) => <PlayerModal {...props} getPlayerGamelog={this.getPlayerGamelog} years={this.state.years} /> } />
                </div>
            </div>
        );
    }
}
