import React, { Component } from 'react';
import axios from 'axios'

class StatsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: this.props.selectedYear,
        }
    }

    componentDidMount = () => {
        console.log('stats container mounted')
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
