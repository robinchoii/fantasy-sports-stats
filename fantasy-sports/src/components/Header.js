import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/full_football_black_970w.png';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/"><div className='full-logo'/></NavLink>
            <NavLink to="/" className='App-title'><div className=''>Fantasy Football Graphs</div></NavLink>
        </div>
    )
}

export default Header
