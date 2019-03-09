import React from 'react';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "SETTINGS",
            settings:  {
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

    render() {
        return (
            <div settings-table-wrapper>
                <h2>Scoring</h2>
                <div className='settings-table'>
                    <div className='settings-table-header'>
                        <div>Offense</div>
                    </div>
                    <div className='settings-table-header'>
                        <div>Value</div>
                    </div>
                    <div className='settings-table-body'>
                        <div>Passing Yards</div>
                        <div>Passing Touchdowns</div>
                        <div>Interceptions</div>
                        <div>Rushing Yards</div>
                        <div>Rushing Touchdowns</div>
                        <div>Receptions</div>
                        <div>Receiving Yards</div>
                        <div>Receiving Touchdowns</div>
                        <div>Fumbles Lost</div>
                        <div>2-Point Conversions</div>
                    </div>
                    <div className='settings-table-body'>
                        <div>{ this.state.settings.passYd } yards per point</div>
                        <div>{ this.state.settings.passTD }</div>
                        <div>{ this.state.settings.int }</div>
                        <div>{ this.state.settings.rushYd }</div>
                        <div>{ this.state.settings.rushTD }</div>
                        <div>{ this.state.settings.reception }</div>
                        <div>{ this.state.settings.recYd }</div>
                        <div>{ this.state.settings.recTD }</div>
                        <div>{ this.state.settings.fumbleLost }</div>
                        <div>{ this.state.settings.twoPoint }</div>
                    </div>
                </div>
            </div>
        );
    }
}

