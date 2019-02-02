import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/"><h1>Fantasy Football Graphs</h1></NavLink>
        </div>
    )
}

export default Header
