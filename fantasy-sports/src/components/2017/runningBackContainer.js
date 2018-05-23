import React from 'react';
import axios from 'axios';
import RunningBack from './runningBack';

export default class RunningBackContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            RB: []
        }
    }

    componentDidMount() {
        console.log('RunningBack container mounted!')
        console.log(this.state)

        var config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/cumulative_player_stats.json?position=RB", config)
            .then((response) => {
                console.log(response.data['cumulativeplayerstats'])
                let updatedRB = Object.assign({}, this.state.RB)

                updatedRB = response.data['cumulativeplayerstats']['playerstatsentry']

                this.setState({
                    RB: updatedRB
                })
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h1>All the 2017 RB Players</h1>
                {this.state.RB.map((player, key) =>
                    <RunningBack
                        key={key}
                        position='RB'
                        firstname={player.player.FirstName}
                        lastname={player.player.LastName} />

                    )}
            </div>
        );
    }
}
