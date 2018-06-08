import React from 'react';
import QuarterBackTable from './quarterBackTable'
import WeekByWeek from './weekByWeekContainer'

export default class statsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <QuarterBackTable {...this.props} />
                <WeekByWeek {...this.props} />
            </div>
        );
    }
}
