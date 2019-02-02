import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import StatsTable from '../StatsTable';

class PlayerModal extends Component {
    constructor(props) {
    super(props)
        this.state = {
            selectedYear: '',
            gamelogs: [],
            chartData: {},
            totals: {}
        }
    }

    handleYearChange = (year, first, last, id) => {

        let updatedGamelogs = Object.assign({},this.state.gamelogs);
        let updatedChartData = Object.assign({},this.state.chartData);
        let updatedTotals = Object.assign({},this.state.totals);
        let weeksPlayed = [];
        let weeklyPoints = [];
        let totalRushAtt = 0;
        let totalRushYard = 0;
        let totalRushTD = 0;

        updatedGamelogs = this.props.getPlayerGamelog(year, first, last, id)

        updatedGamelogs
            .then((gamelogsUpdated) => {
                this.setState({
                    gamelogs: gamelogsUpdated,
                    selectedYear: year
                });

                return gamelogsUpdated
            })
            .then((gamelogs) => {
                gamelogs.map((game, key) => {
                    let week = game.game.week
                    let passYds = game.stats.passing.passYards
                    let int = game.stats.passing.passInt
                    let passTds = game.stats.passing.passTD
                    let targets = game.stats.receiving.targets
                    let receptions = game.stats.receiving.receptions
                    let recYds = game.stats.receiving.recYards
                    let recTds = game.stats.receiving.recTD
                    let rushAtts = game.stats.rushing.rushAttempts
                    let rushYds = game.stats.rushing.rushYards
                    let rushTds = game.stats.rushing.rushTD
                    let fumLost = game.stats.fumbles.fumLost
                    let twoPtMade = game.stats.twoPointAttempts.twoPtMade

                    let weeklyFantasyPoints = this.props.convertToFantasyPoints(passYds,passTds,int, receptions, recYds, recTds, rushYds, rushTds, fumLost, twoPtMade)
                    totalRushAtt += rushAtts
                    totalRushYard += rushYds
                    totalRushTD += rushTds
                    updatedTotals.attempts = totalRushAtt
                    updatedTotals.yards = totalRushYard
                    updatedTotals.touchdowns = totalRushTD

                    weeksPlayed.push(game.game.week)
                    weeklyPoints.push(weeklyFantasyPoints)
                })

                updatedChartData.labels = weeksPlayed

                let datasets = [
                            {
                                label: 'Total Points',
                                data: weeklyPoints,
                                fill: true,
                                borderColor: 'blue',
                                pointBorderColor: 'red',
                                pointBackgroundColor: 'red',
                                pointBorderWidth: 5,
                            }
                        ]
                updatedChartData.datasets = datasets
                this.setState({
                    chartData: updatedChartData,
                    totals: updatedTotals
                })


            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {

        const { first, last, id } = this.props.match.params

        return (
            <div>
                <div>
                    <h1>{first} {last}</h1>
                    <div className='player-card'>
                        <div>
                            <h4>CARRIES</h4>
                            <h2>{this.state.totals.attempts}</h2>
                        </div>
                        <div>
                            <h4>YARDS</h4>
                            <h2>{this.state.totals.yards}</h2>
                        </div>
                        <div>
                            <h4>TOUCHDOWNS</h4>
                            <h2>{this.state.totals.touchdowns}</h2>
                        </div>
                    </div>
                    <ul id='years'>
                        {this.props.years.map((year,key) => <Link to={`/rb/${first}-${last}-${id}/${year}`} key={key} onClick={() => this.handleYearChange(year, first, last, id)}><li>{year}</li></Link>)}
                    </ul>
                </div>
                <Route path="/rb/:first-:last-:id/:year" render={(props) => <StatsTable {...props} years={this.props.years} chartData={this.state.chartData} gamelogs={this.state.gamelogs} convertToFantasyPoints={this.props.convertToFantasyPoints}selectedYear={this.state.selectedYear} /> } />
            </div>
        )
    }
}

export default PlayerModal

