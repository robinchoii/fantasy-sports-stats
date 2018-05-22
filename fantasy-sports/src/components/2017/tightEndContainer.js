import React from 'react';
import axios from 'axios';
import TightEnd from './tightEnd';

export default class WideReceiverContainer extends React.Component {
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

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?position=TE", config)
            .then((response) => {
                console.log(response.data['activeplayers'])
                let updatedTE = Object.assign({}, this.state.TE)

                updatedTE = response.data['activeplayers']['playerentry']

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
            <div>
                <h1>All the 2017 TE Players</h1>
                <TightEnd position='TE'/>
            </div>
        );
    }
}
