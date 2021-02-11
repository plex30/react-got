import React from 'react';
import {NavLink} from 'react-router-dom'
/* import './Menu.scss' */


export function Menu(){
    return(
        <nav className="navMenu">
           
           
            <NavLink to="/casas">CASAS</NavLink>
            <NavLink to="/personajes">PERSONAJES</NavLink>
            <NavLink to="/cronologia">CRONOLOGIA</NavLink>
            <NavLink to="/cronologia">CRONOLOGIA</NavLink>

        </nav>
    )
}