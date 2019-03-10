import React from 'react';
import Settings from './Settings';

export default class Main extends React.Component {
    render() {
        return (
            <div className='main main-container'>
                <h2>Visualize Fantasy Football Player's Stats from  Tables to Graphs!</h2>
                <Settings />
            </div>
        );
    }
}
