import React, { Component } from 'react';
import axios from 'axios'

class StatsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            year: this.props.selectedYear,
        }
    }

    componentDidMount = () => {
        console.log('stats container mounted')
    }

    render() {
        return (
            <div>
                <div>stats from {this.props.match.params.year} </div>
                <div>stats from {this.props.match.params.first} </div>
                <div>stats from {this.props.match.params.last} </div>
                <div>stats from {this.props.match.params.id} </div>
                <div>
                    <div className='table-header'>
                        <div>Week</div>
                        <div>PassYd</div>
                        <div>PassTd</div>
                        <div>PassInt</div>
                        <div>Target</div>
                        <div>Rec</div>
                        <div>RecYd</div>
                        <div>RecTd</div>
                        <div>RushYd</div>
                        <div>RushTd</div>
                        <div>Fum Lost</div>
                        <div>2-Pt Made</div>
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
                            </div>
                        )
                    })}


                </div>
            </div>
        );
}
}

export default StatsContainer;
