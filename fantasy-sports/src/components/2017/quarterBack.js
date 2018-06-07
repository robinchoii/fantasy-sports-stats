import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import QbChart from './qbChart';

export default class QuarterBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weeks: [],
            isSelected: false
        }
    }

    getPlayerStats = () => {
        let config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              }
        };
        let updatedIsSelected = Object.assign({}, this.state.isSelected);
        updatedIsSelected = true;

        axios.get(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/player_gamelogs.json?player=${this.props.firstname}-${this.props.lastname}-${this.props.playerID}`, config )
            .then( (response) =>  {
                let updatedWeeks = Object.assign( {}, this.state.weeks)
                updatedWeeks = response.data.playergamelogs.gamelogs

                this.setState({
                    weeks: updatedWeeks
                })

            })
            .catch( (err) => {
                console.log(err)
            })

        this.setState({
            isSelected: updatedIsSelected
        })

    }

    render() {
        return (
            <div>
                <h5 onClick={this.getPlayerStats}> {this.props.firstname} {this.props.lastname} </h5>
                { this.state.isSelected ?  (
                    <QbChart
                        passAttempts= { this.props.passAttempts }
                        passYards= { this.props.passYards }
                        interceptions= { this.props.interceptions }
                        passTD= { this.props.passTD }
                        rushAttempts= { this.props.rushAttempts }
                        rushYards= { this.props.rushYards }
                        rushTD= { this.props.rushTD }
                        fumLost= { this.props.fumLost } /> ) : ( <div /> )}

            </div>
        );
    }

}


QuarterBack.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
