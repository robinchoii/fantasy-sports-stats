import React from 'react';
import axios from 'axios';
import WideReceiver from './wideReceiver';

export default class WideReceiverContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            WR: []
        }
    }

    componentDidMount() {
        console.log('WideReceiver container mounted!')
        console.log(this.state)

        var config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/cumulative_player_stats.json?position=WR", config)
            .then((response) => {
                console.log(response.data['cumulativeplayerstats'])
                let updatedWR = Object.assign({}, this.state.WR)

                updatedWR = response.data['cumulativeplayerstats']['playerstatsentry']

                this.setState({
                    WR: updatedWR
                })
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    handleClick = (first, last, ID) => {
        console.log('wr click');
        const config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              }
        };
        // axios.get('https://api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/player_gamelogs.json?player=doug-baldwin-8292??playerstats=Receiving.Rec', config)
        //     .then((response) => {
        //         console.log(response.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }

    render() {
        return (
            <div className="main-container">
                <h1>All the 2017 WR Players</h1>
                {this.state.WR.map( (player, key) =>
                    <WideReceiver
                        key={key}
                        position='WR'
                        firstName={player.player.FirstName}
                        lastName={player.player.LastName}
                        playerID={player.player.ID}
                        onClick={this.handleClick} />
                )}
            </div>
        );
    }
}
