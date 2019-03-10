import React from 'react';
import { MyContext } from ".././App.js"

const Settings = () =>  {
    return (
        <MyContext.Consumer>
            {(context) => (
                <div className='settings-table-wrapper'>
                    <h2>Yahoo Default Scoring</h2>
                    <div className="scoring-type">
                        <div onClick={context.handleScoringChange}>Standard</div>
                        <div onClick={context.handleScoringChange}>.5 PPR</div>
                        <div onClick={context.handleScoringChange}>1 PPR</div>
                    </div>
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
                            <div>{ context.state.settings.passYd } yards per point</div>
                            <div>{ context.state.settings.passTD }</div>
                            <div>{ context.state.settings.int }</div>
                            <div>{ context.state.settings.rushYd } yards per point</div>
                            <div>{ context.state.settings.rushTD }</div>
                            <div>{ context.state.settings.reception }</div>
                            <div>{ context.state.settings.recYd }</div>
                            <div>{ context.state.settings.recTD }</div>
                            <div>{ context.state.settings.fumbleLost }</div>
                            <div>{ context.state.settings.twoPoint }</div>
                        </div>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
    );
}

export default Settings
