import React from 'react';

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
                    <li onClick={this.handleGetPlayerInfo}>{this.props.lastName}, {this.props.firstName} </li>
                </ul>
            </div>
        );
    }

}
