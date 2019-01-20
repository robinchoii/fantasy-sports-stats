import React from 'react';
import { Route, Link } from 'react-router-dom';
import StatsContainer from './StatsContainer';

const PlayerModal = (props) => {
    const {first, id, last } = props.match.params;
    let years = ['2014','2015','2016','2017'];

    return (
        <div>
            <ul>
                {years.map((year,key) => <Link to={`/wr/${first}-${last}-${id}/${year}`} key={key}><li>{year}</li></Link>)}
            </ul>
            {first} {last}
            <Route path="/wr/:first-:last-:id/:year" render={(props) => <StatsContainer {...props} /> } />
        </div>
    )
}

export default PlayerModal

