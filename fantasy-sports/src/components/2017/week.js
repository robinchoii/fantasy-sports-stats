import React from 'react';
import PropTypes from 'prop-types';


export default class Week extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='table'>
                    <div className='table-body'>
                        <div> Week #</div>
                        <div> { this.props.passAttempts } </div>
                        <div> { this.props.passYards } </div>
                        <div> { this.props.passTD } </div>
                        <div> { this.props.interceptions } </div>
                        <div> { this.props.rushAttempts } </div>
                        <div> { this.props.rushYards } </div>
                        <div> { this.props.rushTD } </div>
                        <div> { this.props.fumLost } </div>
                    </div>
                </div>

            </div>
        );
    }
}


Week.propTypes = {

}
