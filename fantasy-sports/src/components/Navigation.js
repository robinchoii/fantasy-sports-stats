import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='leftnav'>
            <ul className='navlinks'>
                <NavLink to='/qb'><li>QB</li></NavLink>
                <NavLink to='/wr'><li>WR</li></NavLink>
                <NavLink to='/rb'><li>RB</li></NavLink>
                <NavLink to='/te'><li>TE</li></NavLink>
                <NavLink to='/k'><li>K</li></NavLink>
                <NavLink to='/settings'><li>SETTINGS</li></NavLink>
            </ul>
        </div>
    )
};


export default Navigation;
