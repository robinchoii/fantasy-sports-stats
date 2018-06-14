import React from 'react';
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'

export default class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4','Week 5', 'Week 6','Week 7','Week 8','Week 9','Week 10','Week 11','Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
                datasets: [
                    {
                        label: 'Week by Week Fantasy Points',
                        data: [10.68, 30.78, 33.72, 20.48, 13.62, 17.18, 18.46, 17.52, 22.64, 25.6, 21.68, 9.32, 11.32, 14.72, 16.57, 15.6],
                        fill: false,
                        pointBorderColor: 'rgba(175,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 3,


                    }
                ]
            }

        }
    }

    render() {
        return (
            <div className='line-chart'>
                <Line
                    data={this.state.data}

                />
            </div>
        );
    }
}

LineChart.propTypes = {
    data: PropTypes.object

}
