import React from 'react';
import axios from 'axios';
import TightEnd from './tightEnd';

export default class TightEndContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            TE: []
        }
    }

    componentDidMount() {
        console.log('TightEnd container mounted!')
        console.log(this.state)

        var config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/cumulative_player_stats.json?position=TE", config)
            .then((response) => {
                console.log(response.data['cumulativeplayerstats'])
                let updatedTE = Object.assign({}, this.state.TE)

                updatedTE = response.data['cumulativeplayerstats']['playerstatsentry']

                this.setState({
                    TE: updatedTE
                })
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="main-container">
                <h1>All the 2017 TE Players</h1>
                {this.state.TE.map((player, key) =>
                    <TightEnd
                        key={key}
                        position='TE'
                        firstname={player.player.FirstName}
                        lastname={player.player.LastName} />

                    )}
            </div>
        );
    }
}
