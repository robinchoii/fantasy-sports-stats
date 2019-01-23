import React, { Component } from 'react';
import axios from 'axios'

class StatsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: this.props.selectedYear,
            scoring:  {
                passYd: 25,
                passTD: 4,
                int: -1,
                reception: .5,
                recYd: 10,
                recTD: 6,
                rushYd : 10,
                rushTD: 6,
                fumbleLost: -2,
                twoPoint: 2
            },
        }
    }

    componentDidMount = () => {
        console.log('stats container mounted')
    }

    convertToFantasyPoints = (passYds, passTds, int, rec, recYds, recTds, rushYds, rushTds, fumLost, twoPoint ) => {
        let fantasyPoints = 0;
        fantasyPoints += passYds / this.state.scoring.passYd;
        fantasyPoints += passYds * this.state.scoring.passTD;
        fantasyPoints += int * this.state.scoring.int;
        fantasyPoints += rec * this.state.scoring.reception;
        fantasyPoints += recYds / this.state.scoring.recYd;
        fantasyPoints += recTds * this.state.scoring.recTD;
        fantasyPoints += rushYds / this.state.scoring.rushYd;
        fantasyPoints += rushTds * this.state.scoring.rushTD;
        fantasyPoints += fumLost * this.state.scoring.fumbleLost;
        fantasyPoints += twoPoint * this.state.scoring.twoPoint;

        return Math.ceil(fantasyPoints * 100) / 100;
    }

    render() {
        return (
            <div>
                <div>stats from {this.props.match.params.year} </div>
                <div>stats from {this.props.match.params.first} </div>
                <div>stats from {this.props.match.params.last} </div>
                <div>stats from {this.props.match.params.id} </div>
                <div>
                    <div class="table-category">
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
                        <div>Fum Lost</div>
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

                        let weeklyFantasyPoints = this.convertToFantasyPoints(passYds,passTds,int, receptions, recYds, recTds, rushYds, rushTds, fumLost, twoPtMade)

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
                </div>
            </div>
        );
}
}

export default StatsContainer;
