import React from 'react';
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { LineChart } from 'react-easy-chart';



export default class LineChart extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let options = {{[}1,10},{[}2,20},{[}3,15},{[}4,25},{[}5,25}}
        return (
            <div className='line-chart-container'>
                <LineChart
                    data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]}
                />
            </div>
        );
    }
}

LineChart.propTypes = {
    data: PropTypes.object
}
