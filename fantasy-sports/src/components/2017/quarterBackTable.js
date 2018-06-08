import React from 'react';

export default class quarterBackTable extends React.Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='table'>
                    <div className='table-header'>
                        <div />
                        <div>Pass Attempts</div>
                        <div>Pass Yards</div>
                        <div>Pass TD</div>
                        <div>Int</div>
                        <div>Rush Attempts</div>
                        <div>Rush Yards</div>
                        <div>Rush TD</div>
                        <div>Fum Lost</div>
                    </div>
                    <div className='table-body'>
                        <div> 2017 </div>
                        <div> { this.props.passAttempts } </div>
                        <div> { this.props.passYards } </div>
                        <div> { this.props.passTD } </div>
                        <div> { this.props.interceptions } </div>
                        <div> { this.props.rushAttempts } </div>
                        <div> { this.props.rushYards } </div>
                        <div> { this.props.rushTD } </div>
                        <div> { this.props.fumLost } </div>
                    </div>
                </div>
            </div>
        );
    }
}
