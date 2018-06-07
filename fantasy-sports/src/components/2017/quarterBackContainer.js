import React from 'react';
import axios from 'axios';
import Quarterback from './quarterBack';

export default class QuarterBackContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            QB: []
        }
    }

    componentDidMount() {
        console.log('Quarterback container mounted!')
        console.log(this.state)

        var config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/cumulative_player_stats.json?position=QB", config)
            .then((response) => {
                console.log(response.data['cumulativeplayerstats'])
                let updatedQB = Object.assign({}, this.state.QB)

                updatedQB = response.data['cumulativeplayerstats']['playerstatsentry']

                this.setState({
                    QB: updatedQB
                })
            })
            .catch(function(err) {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <h1>All the 2017 QB Players</h1>

                {this.state.QB.map((player, key) =>
                    <Quarterback
                        key={key}
                        position='QB'
                        firstname={player.player.FirstName}
                        lastname={player.player.LastName}
                        passAttempts= { player.stats.PassAttempts['#text'] }
                        passYards= { player.stats.PassYards['#text'] }
                        interceptions= { player.stats.PassInt['#text'] }
                        passTD= { player.stats.PassTD['#text'] }
                        rushAttempts= { player.stats.RushAttempts['#text'] }
                        rushYards= { player.stats.RushYards['#text'] }
                        rushTD= { player.stats.RushTD['#text'] }
                        fumLost= { player.stats.FumLost['#text'] }
                        playerID= { player.player.ID} />
                )}
            </div>
        );
    }
}
