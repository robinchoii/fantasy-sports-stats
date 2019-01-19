import React from 'react';

const PlayerModal = (props) => {
    const {first, id, last } = props.match.params
    return (
        <div>
            <ul>
                <li>2014</li>
                <li>2015</li>
                <li>2016</li>
                <li>2017</li>
                <li>2018</li>
            </ul>
            {first} {last}
        </div>
    )
}

export default PlayerModal

