import React from 'react';
import axios from 'axios';

export default class playersContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            QB: [],
            WR: [],
            RB: [],
            TE: [],
        }
    }

    componentDidMount() {
        console.log('players container mounted!')
        console.log(this.state)

        var config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              },
        };

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?position=qb", config)
            .then((response) => {
                console.log(response.data['activeplayers'])
                let updatedQB = Object.assign({}, this.state.QB)

                updatedQB = response.data['activeplayers']

                this.setState({
                    QB: updatedQB
                })
            })
            .catch(function(err) {
                console.log(err)
            })

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?position=wr", config)
            .then((response) => {
                console.log(response.data['activeplayers'])
                let updatedWR = Object.assign({}, this.state.WR)

                updatedWR = response.data['activeplayers']

                this.setState({
                    WR: updatedWR
                })
            })
            .catch(function(err) {
                console.log(err)
            })

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?position=rb", config)
            .then((response) => {
                console.log(response.data['activeplayers'])
                let updatedRB = Object.assign({}, this.state.RB)

                updatedRB = response.data['activeplayers']

                this.setState({
                    RB: updatedRB
                })
            })
            .catch(function(err) {
                console.log(err)
            })

        axios.get("https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-2018-regular/active_players.json?position=te", config)
            .then((response) => {
                console.log(response.data['activeplayers'])
                let updatedTE = Object.assign({}, this.state.TE)

                updatedTE = response.data['activeplayers']

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
                <h1>All the 2017 NFL Players</h1>
            </div>
        );
    }
}
