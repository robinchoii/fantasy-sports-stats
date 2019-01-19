import React from 'react';

const PlayerModal = (props) => {
    const {first, id, last } = props.match.params
    return (
        <div>
            {first} {last}
        </div>
    )
}

export default PlayerModal

