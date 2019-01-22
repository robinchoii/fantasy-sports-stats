import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import StatsContainer from './StatsContainer';

class PlayerModal extends Component {
    constructor(props) {
    super(props)
        this.state = {
            selectedYear: '',

        }
    }

    handleYearChange = (year) => {
        this.props
        this.setState({
            selectedYear: year
        })

    }



    render() {

        const { first, last, id } = this.props.match.params

        return (
            <div>
                <ul>
                    {this.props.years.map((year,key) => <Link to={`/wr/${first}-${last}-${id}/${year}`} key={key} onClick={() => this.handleYearChange(year)}><li >{year}</li></Link>)}
                </ul>
                {first} {last} {id}

                <Route path="/wr/:first-:last-:id/:year" render={(props) => <StatsContainer {...props} years={this.props.years} getPlayerGamelog={this.props.getPlayerGamelog} selectedYear={this.state.selectedYear} /> } />
            </div>
        )
    }
}

export default PlayerModal

