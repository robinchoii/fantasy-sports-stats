import React, { Component } from 'react';
import axios from 'axios'

class StatsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: this.props.selectedYear,
            gamelogs: []
        }
    }

    componentDidMount = () => {
        console.log('stats mounted')
        let updatedGamelogs = Object.assign({},this.state.gamelogs);

        updatedGamelogs = this.props.getPlayerGamelog(this.state.year, this.props.match.params.first, this.props.match.params.last, this.props.match.params.id)

        updatedGamelogs.then((val) => {
            this.setState({
                gamelogs: val
            });
        });
    }

    render() {
        return (
            <div>
                <div>stats from {this.props.match.params.year} </div>
                <div>stats from {this.props.match.params.first} </div>
                <div>stats from {this.props.match.params.last} </div>
                <div>stats from {this.props.match.params.id} </div>
            </div>
        );
}
}

export default StatsContainer;
