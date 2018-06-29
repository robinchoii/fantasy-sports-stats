import React from 'react';
import QuarterBackTable from './quarterBackTable'
import WeekByWeek from './weekByWeekContainer'
import LineChart from './LineChart'

export default class statsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="stats-container">
                <QuarterBackTable {...this.props} />
                <WeekByWeek {...this.props} />
                <LineChart data={this.props.chartData} />
            </div>
        );
    }
}
