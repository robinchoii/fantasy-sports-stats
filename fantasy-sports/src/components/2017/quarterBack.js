import React from 'react';
import PropTypes from 'prop-types';

export default class quarterBack extends React.Component {
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


quarterBack.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
