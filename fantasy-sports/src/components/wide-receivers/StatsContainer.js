import React from 'react';

const StatsContainer = (props) => {
    const { year } = props.match.params

    return (
        <div>stats from {year}</div>
    );
}

export default StatsContainer;
