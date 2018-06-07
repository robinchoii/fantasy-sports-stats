import React from 'react';
import PropTypes from 'prop-types';
import QbChart from './qbChart';

export default class QuarterBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    getPlayerStats = () => {
        console.log(this.props.playerID)
        this.setState({
            isSelected: true

        })

    }

    render() {
        return (
            <div>
                <h5 onClick={this.getPlayerStats}> {  this.props.firstname } { this.props.lastname } </h5>
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
