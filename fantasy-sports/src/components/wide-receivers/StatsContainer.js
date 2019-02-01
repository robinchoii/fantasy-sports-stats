import React, { Component } from 'react';
import { Line } from 'react-chartjs-2'

class StatsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: this.props.selectedYear,
        }
    }

    componentDidMount = (props) => {
        console.log('stats container mounted')
    }
    componentWillUnmount = () => {
        console.log('uncounting')
    }

    render() {
        let totalPts = 0;
        let totalPassYds = 0;
        let totalInt = 0;
        let totalPassTds = 0;
        let totalTargets = 0;
        let totalReceptions = 0;
        let totalRecYds = 0;
        let totalRecTds = 0;
        let totalRushYds = 0;
        let totalRushTds = 0;
        let totalFumLost= 0;
        let totalTwoPtMade = 0;

        return (
            <div>
                <div>
                    <div className="table-category">
                        <div></div>
                        <div id="passing">Passing</div>
                        <div id="receiving">Receiving</div>
                        <div id="rushing">Rushing</div>
                        <div id="misc">Misc</div>
                    </div>
                    <div className='table-header'>
                        <div>WEEK</div>
                        <div>Yds</div>
                        <div>TD</div>
                        <div>Int</div>
                        <div>Tgts</div>
                        <div>Rec</div>
                        <div>Yds</div>
                        <div>TD</div>
                        <div>Yds</div>
                        <div>TD</div>
                        <div>FumL</div>
                        <div>2-PT</div>
                        <div>Fan Pts</div>
                    </div>
                    {this.props.gamelogs.map((game,key) => {
                        let week = game.game.week
                        let passYds = game.stats.passing.passYards
                        let int = game.stats.passing.passInt
                        let passTds = game.stats.passing.passTD
                        let targets = game.stats.receiving.targets
                        let receptions = game.stats.receiving.receptions
                        let recYds = game.stats.receiving.recYards
                        let recTds = game.stats.receiving.recTD
                        let rushYds = game.stats.rushing.rushYards
                        let rushTds = game.stats.rushing.rushTD
                        let fumLost= game.stats.fumbles.fumLost
                        let twoPtMade = game.stats.twoPointAttempts.twoPtMade

                        let weeklyFantasyPoints = this.props.convertToFantasyPoints(passYds,passTds,int, receptions, recYds, recTds, rushYds, rushTds, fumLost, twoPtMade)

                        totalPts += weeklyFantasyPoints;
                        totalPassYds +=passYds;
                        totalInt +=int;
                        totalPassTds +=passTds;
                        totalTargets +=targets;
                        totalReceptions +=receptions;
                        totalRecYds +=recYds;
                        totalRecTds +=recTds;
                        totalRushYds +=rushYds;
                        totalRushTds +=rushTds;
                        totalFumLost += fumLost;
                        totalTwoPtMade +=twoPtMade;

                        return (
                            <div key={key} className="table-body">
                                <div>{week}</div>
                                <div>{passYds}</div>
                                <div>{passTds}</div>
                                <div>{int}</div>
                                <div>{targets}</div>
                                <div>{receptions}</div>
                                <div>{recYds}</div>
                                <div>{recTds}</div>
                                <div>{rushYds}</div>
                                <div>{rushTds}</div>
                                <div>{fumLost}</div>
                                <div>{twoPtMade}</div>
                                <div>{weeklyFantasyPoints}</div>
                            </div>
                        )
                    })}
                    <div className='table-body'>
                        <div>Totals</div>
                        <div>{ totalPassYds }</div>
                        <div>{ totalInt }</div>
                        <div>{ totalPassTds }</div>
                        <div>{ totalTargets }</div>
                        <div>{ totalReceptions }</div>
                        <div>{ totalRecYds }</div>
                        <div>{ totalRecTds }</div>
                        <div>{ totalRushYds }</div>
                        <div>{ totalRushTds }</div>
                        <div>{ totalFumLost }</div>
                        <div>{ totalTwoPtMade }</div>
                        <div>{ Math.ceil(totalPts * 100) / 100 }</div>
                    </div>
                </div>
                <div>
                    <h1>GRAPH</h1>
                    <Line data={this.props.chartData}/>
                </div>
            </div>
        );
    }
}

export default StatsContainer;
