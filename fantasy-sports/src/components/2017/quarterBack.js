import React from 'react';
import PropTypes from 'prop-types';
import StatsContainer from './statsContainer';

export default class QuarterBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weeks: [],
            isSelected: false
        }
    }
    onChange = () => {
        this.setState({
            isSelected: !this.state.isSelected
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.onChange}> {this.props.lastname}, {this.props.firstname} </div>
                { this.state.isSelected ?  (
                    <div>
                        <StatsContainer {...this.props} />
                    </div> ) : ( <div /> )}


            </div>
        );
    }

}


QuarterBack.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
