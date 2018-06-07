import React from 'react';
import QuarterBackTable from './quarterBackTable'

export default class statsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <QuarterBackTable {...this.props} />
            </div>
        );
    }
}
