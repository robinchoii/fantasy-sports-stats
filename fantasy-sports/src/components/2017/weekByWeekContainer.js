import React from 'react';
import Week from './week'

export default class weekByWeekContainer extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {

        return (
            <div>
                {this.props.weeks.map( (week, key) => {
                    return <Week
                        key={key}
                        date= { week.game.date }
                        passAttempts= { week.stats.PassAttempts['#text'] }
                        passYards= { week.stats.PassYards['#text'] }
                        interceptions= { week.stats.PassInt['#text'] }
                        passTD= { week.stats.PassTD['#text'] }
                        rushAttempts= { week.stats.RushAttempts['#text'] }
                        rushYards= { week.stats.RushYards['#text'] }
                        rushTD= { week.stats.RushTD['#text'] }
                        fumLost= { week.stats.FumLost['#text'] } />
                })}
            </div>

        );
    }
}
