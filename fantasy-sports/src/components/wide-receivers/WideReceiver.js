import React from 'react';
import { Link } from 'react-router-dom';

export default class WideReceiver extends React.Component {
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
                    <Link to={`/wr/${this.props.firstName}-${this.props.lastName}-${this.props.playerID}`}><li onClick={this.handleGetPlayerInfo}>{this.props.lastName}, {this.props.firstName} </li></Link>
                </ul>
            </div>
        );
    }

}
