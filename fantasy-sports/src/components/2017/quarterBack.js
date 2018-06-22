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
        let updatedIsSelected = Object.assign({}, this.state.isSelected);

        updatedIsSelected = !updatedIsSelected

        this.setState({
            isSelected: updatedIsSelected
        })
    }

    render() {
        return (
            <div>
                <p onClick={this.props.handleClick(this.props.firstname,this.props.lastname, this.props.playerID)}> {this.props.firstname} {this.props.lastname} </p>
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
