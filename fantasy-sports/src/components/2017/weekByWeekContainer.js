import React from 'react';
import Week from './week'

export default class weekByWeekContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.weeks.map(week => {
                    return <Week key={week.key} />
                })}
            </div>

        );
    }
}
