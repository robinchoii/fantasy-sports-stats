import React from 'react';
import PropTypes from 'prop-types';

export default class wideReceiver extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div onClick={this.props.onClick} >{this.props.lastName}, {this.props.firstName} </div>
            </div>
        );
    }

}

wideReceiver.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
