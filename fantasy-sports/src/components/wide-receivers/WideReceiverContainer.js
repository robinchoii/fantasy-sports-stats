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
            selectedWR: {}
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
                let updatedWRs = Object.assign([], this.state.WR)
                updatedWRs = response.data.players.filter((player) => player.player.primaryPosition === 'WR');
                console.log(updatedWRs)

                this.setState({
                    WRs: updatedWRs
                })
        })
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
                // console.log(response.data)
                let updatedSelectedWR = Object.assign({}, this.state.selectedWR);
                updatedSelectedWR = response.data

                console.log(updatedSelectedWR)
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
                                    firstName={player.player.firstName}
                                    lastName={player.player.lastName}
                                    playerID={player.player.id}
                                    getPlayerInfo={this.handleOnClick}
                                />
                        )}
                    </div>
                    <Route path="/wr/:first-:last-:id" render={(props) => <PlayerModal {...props} /> } />
                </div>
            </div>
        );
    }
}
