import React from 'react';
import PropTypes from 'prop-types';

export default class player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.position}</h1>
                <div>{this.props.position}</div>
            </div>
        );
    }

}

player.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
