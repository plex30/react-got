import React from 'react';
import {NavLink} from 'react-router-dom'
import './intoBar.scss'
import logoSpain from '../../../assets/img/spain1.png';
import logoEngland from '../../../assets/img/united-kingdom\ 1.png';
import house from '../../../assets/img/Group.png';



export function IntoBar(){
    return(
        
        <nav className="c-intoBar">
           
            <NavLink className="c-intoBar__link"to="/"><img className="c-intoBar__img" src={house}></img></NavLink>
            <NavLink className="c-intoBar__link"to="/"><img className="c-intoBar__img" src={logoSpain}></img></NavLink>
            <NavLink className="c-intoBar__link"to="/"><img className="c-intoBar__img" src={logoEngland}></img></NavLink>

        </nav>
        
    )
}