import React from 'react';
import PropTypes from 'prop-types';

export default class QuarterBack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='table-header'>

                <div> {  this.props.firstname } </div>
                <div> {  this.props.lastname } </div>
                <div> {  this.props.passAttempts } </div>
                <div> {  this.props.passYards } </div>
                <div> {  this.props.interceptions } </div>
                <div> {  this.props.passTD } </div>
                <div> {  this.props.rushAttempts } </div>
                <div> {  this.props.rushYards } </div>
                <div> {  this.props.rushTD } </div>
                <div> {  this.props.fumLost } </div>

            </div>
        );
    }

}


QuarterBack.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
