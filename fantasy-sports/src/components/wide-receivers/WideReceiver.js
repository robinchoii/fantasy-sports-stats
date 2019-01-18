import React from 'react';

export default class WideReceiver extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.lastName}, {this.props.firstName} </li>
                </ul>
            </div>
        );
    }

}
