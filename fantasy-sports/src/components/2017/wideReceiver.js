import React from 'react';
import PropTypes from 'prop-types';

export default class wideReceiver extends React.Component {
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

wideReceiver.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
