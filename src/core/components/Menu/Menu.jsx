import React from 'react';
import {NavLink} from 'react-router-dom'
import './Menu.scss' 


export function Menu(){
    return(
        
        <nav className="c-menu">
           
            <NavLink className="c-menu--link"to="/houses">Houses</NavLink>
            <NavLink className="c-menu--link"to="/characters">Characters</NavLink>
            <NavLink className="c-menu--link"to="/timeline">Timeline</NavLink>

        </nav>
        
    )
}