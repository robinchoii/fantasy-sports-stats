import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import StatsContainer from './StatsContainer';

class PlayerModal extends Component {
    constructor(props) {
    super(props)
        this.state = {
            selectedYear: '',
            gamelogs: []
        }
    }

    handleYearChange = (year, first, last, id) => {

        let updatedGamelogs = Object.assign({},this.state.gamelogs);

        updatedGamelogs = this.props.getPlayerGamelog(year, first, last, id)

        updatedGamelogs
            .then((gamelogsUpdated) => {
                this.setState({
                    gamelogs: gamelogsUpdated,
                    selectedYear: year
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {

        const { first, last, id } = this.props.match.params

        return (
            <div>
                <ul>
                    {this.props.years.map((year,key) => <Link to={`/wr/${first}-${last}-${id}/${year}`} key={key} onClick={() => this.handleYearChange(year, first, last, id)}><li>{year}</li></Link>)}
                </ul>
                {first} {last} {id}

                <Route path="/wr/:first-:last-:id/:year" render={(props) => <StatsContainer {...props} years={this.props.years} gamelogs={this.state.gamelogs} selectedYear={this.state.selectedYear} /> } />
            </div>
        )
    }
}

export default PlayerModal

