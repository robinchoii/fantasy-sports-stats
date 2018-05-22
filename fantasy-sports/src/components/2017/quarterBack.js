import React from 'react';
import PropTypes from 'prop-types';

export default class quarterBack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.lastname}, {this.props.firstname} </div>
            </div>
        );
    }

}


quarterBack.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
