import React from 'react';
import axios from 'axios';
import RunningBack from './runningBack';

export default class runningBackContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            RB: []
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

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?position=RB", config)
            .then((response) => {
                console.log(response.data['activeplayers'])
                let updatedRB = Object.assign({}, this.state.RB)

                updatedRB = response.data['activeplayers']['playerentry']

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
                <RunningBack position='RB'/>
            </div>
        );
    }
}
