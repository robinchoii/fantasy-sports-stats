import React from 'react';
import Week from './week'
import LineChart from './LineChart'

export default class weekByWeekContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings:  {
                passYards: 25,
                passTD: 4,
                interceptions: -1,
                rushYards : 10,
                rushTD: 6,
                fumbleLost: -2,
            },
            fantasyPoints: []
        }
    }

    getFantasyPoints = (pYds, pTD, int, rYds, rTD, fumL) => {
        let totalPoints = 0;

        totalPoints += pYds / this.state.settings.passYards
        totalPoints += pTD * this.state.settings.passTD
        totalPoints += int / this.state.settings.interceptions
        totalPoints += rYds / this.state.settings.rushYards
        totalPoints += rTD * this.state.settings.rushYards
        totalPoints += fumL * this.state.settings.fumbleLost

        return Math.ceil(totalPoints * 100) / 100
    }



    render() {

        return (
            <div>
                {this.props.weeks.map( (week, key) => {
                    let date =  week.game.date
                    let passAttempts = week.stats.PassAttempts['#text']
                    let passYards = week.stats.PassYards['#text']
                    let interceptions = week.stats.PassInt['#text']
                    let passTD = week.stats.PassTD['#text']
                    let rushAttempts = week.stats.RushAttempts['#text']
                    let rushYards = week.stats.RushYards['#text']
                    let rushTD = week.stats.RushTD['#text']
                    let fumLost = week.stats.FumLost['#text']
                    let total = this.getFantasyPoints(passYards, passTD, interceptions, rushYards, rushTD, fumLost)
                    this.state.fantasyPoints.push(total)

                    return <Week
                        key={key}
                        date= {date}
                        passAttempts= { passAttempts }
                        passYards= { passYards }
                        interceptions= { interceptions }
                        passTD= { passTD }
                        rushAttempts= { rushAttempts }
                        rushYards= { rushYards }
                        rushTD= { rushTD }
                        fumLost= { fumLost }
                        fantasyPoints={ this.getFantasyPoints(passYards, passTD, interceptions, rushYards, rushTD, fumLost) }/>
                })}
                <LineChart />
            </div>

        );
    }
}
