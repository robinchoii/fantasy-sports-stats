import React from 'react';
import Week from './week'
import LineChart from './LineChart'

export default class weekByWeekContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            weeklyFantasyPoints: []
        }
    }

    render() {

        return (
            <div>
                {this.props.gameLog.map( (week, key) => {
                    let date =  week.game.date
                    let passAttempts = week.stats.PassAttempts['#text']
                    let passYards = week.stats.PassYards['#text']
                    let interceptions = week.stats.PassInt['#text']
                    let passTD = week.stats.PassTD['#text']
                    let rushAttempts = week.stats.RushAttempts['#text']
                    let rushYards = week.stats.RushYards['#text']
                    let rushTD = week.stats.RushTD['#text']
                    let fumLost = week.stats.FumLost['#text']
                    let total = this.props.onGetFantasyPoints(passYards, passTD, interceptions, rushYards, rushTD, fumLost)
                    this.state.dates.push(date.substr(5,8))
                    this.state.weeklyFantasyPoints.push(total)

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
                        fantasyPoints={ this.props.onGetFantasyPoints(passYards, passTD, interceptions, rushYards, rushTD, fumLost) }/>
                })}
            </div>

        );
    }
}
