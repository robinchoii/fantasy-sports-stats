import React from 'react';
import Week from './week'

export default class weekByWeekContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats:  {
                passYards: 25,
                passTD: 4,
                interceptions: -1,
                rushYards : 10,
                rushTD: 6,
                fumbleLost: -2,
            }
        }
    }

    getFantasyPoints = (pYds, pTD, int, rYds, rTD, fumL) => {
        let totalPoints = 0;

        totalPoints += pYds / this.state.stats.passYards
        totalPoints += pTD * this.state.stats.passTD
        totalPoints += int / this.state.stats.interceptions
        totalPoints += rYds / this.state.stats.rushYards
        totalPoints += rTD * this.state.stats.rushYards
        totalPoints += fumL * this.state.stats.fumbleLost

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
            </div>

        );
    }
}
