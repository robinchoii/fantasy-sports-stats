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

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/cumulative_player_stats.json?position=WR", config)
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

    render() {
        return (
            <div>
                <h1>All the 2017 WR Players</h1>
                {this.state.WR.map( (player, key) =>
                    <WideReceiver
                        key={key}
                        position='WR'
                        firstname={player.player.FirstName}
                        lastname={player.player.LastName} />
                )}
            </div>
        );
    }
}
