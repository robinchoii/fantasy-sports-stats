import React from 'react';
import { Link } from 'react-router-dom';

export default class RunningBack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <Link to={`/te/${this.props.firstName}-${this.props.lastName}-${this.props.playerID}`}><li>{this.props.lastName}, {this.props.firstName}</li></Link>
                </ul>
            </div>
        );
    }
}
