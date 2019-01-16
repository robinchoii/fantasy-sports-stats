import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='/qb'>QB</NavLink></li>
                <li><NavLink to='/wr'>WR</NavLink></li>
                <li><NavLink to='/rb'>RB</NavLink></li>
                <li><NavLink to='/te'>TE</NavLink></li>
                <li><NavLink to='/k'>K</NavLink></li>
                <li><NavLink to='/settings'>SETTINGS</NavLink></li>
            </ul>
        </div>
    )
};


export default Navigation;
