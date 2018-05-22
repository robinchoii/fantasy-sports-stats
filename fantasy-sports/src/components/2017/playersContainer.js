import React from 'react';
import axios from 'axios';

export default class playersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('players container mounted!')

        var config = {
            auth: {
                username: 'robinchoii',
                password: '!Gitstatus1'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?", config)
            .then(function(response) {
                console.log(response)
            })

    }


    render() {
        return (
            <div>
                <h1>All the 2017 NFL Players</h1>
            </div>
        );
    }
}
