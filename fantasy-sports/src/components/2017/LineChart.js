import React from 'react';
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='line-chart'>
                <Line
                    data={this.props.data}
                />
            </div>
        );
    }
}

LineChart.propTypes = {
    data: PropTypes.object
}
