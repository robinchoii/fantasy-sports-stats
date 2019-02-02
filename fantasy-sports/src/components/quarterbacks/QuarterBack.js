import React from 'react';
import { Link } from 'react-router-dom'

export default class QuarterBack extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGetPlayerInfo = () => {
        this.props.getPlayerInfo(this.props.firstName, this.props.lastName, this.props.playerID)
    }

    render() {
        return (
            <div>
                <ul>
                    <Link to={`/qb/${this.props.firstName}-${this.props.lastName}-${this.props.playerID}`}><li>{this.props.lastName}, {this.props.firstName}</li></Link>
                </ul>
            </div>
        );
    }
}
