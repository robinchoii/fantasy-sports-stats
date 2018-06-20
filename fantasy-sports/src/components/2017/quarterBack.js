import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import QuarterBackTable from './quarterBackTable';
import StatsContainer from './statsContainer';

export default class QuarterBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weeks: [],
            isSelected: false
        }
    }

    handleClick = (first,last,ID) => (event) => {
        console.log('click')
        const config = {
            auth: {
                username: 'robinchoii',
                password: 'fantasy123'
              }
        };
        axios.get(`https://api.mysportsfeeds.com/v1.2/pull/nfl/2017-regular/player_gamelogs.json?player=${first}-${last}-${ID}&&playerstats=Passing.td,Passing.att,Passing.yds,Passing.int,Rushing.att,Rushing.td,Rushing.yds,Fumbles.lost,2PT.2PTMade`, config)
            .then((response) => {
                let updatedPlayerGameLog = Object.assign({},  this.state.playerGameLog);
                let updatedIsSelected = Object.assign({}, this.state.isSelected);

                updatedPlayerGameLog = response.data.playergamelogs.gamelogs
                updatedIsSelected = true;

                this.setState({
                    weeks: updatedPlayerGameLog,
                    isSelected: updatedIsSelected
                })
            })

    }

    componentDidMount = () => {

    }


    render() {
        return (
            <div>
                <h5 onClick={this.handleClick(this.props.firstname,this.props.lastname, this.props.playerID)}> {this.props.firstname} {this.props.lastname} </h5>
                { this.state.isSelected ?  (
                    <div>
                        <StatsContainer {...this.props} weeks={this.state.weeks} />
                    </div> ) : ( <div /> )}


            </div>
        );
    }

}


QuarterBack.propTypes =  {
    position: PropTypes.string,
    name: PropTypes.string
}
