import React from 'react';
import {NavLink, useLocation} from 'react-router-dom'
import './intoBar.scss'
import logoSpain from '../../../assets/img/spain1.png';
import logoEngland from '../../../assets/img/united-kingdom\ 1.png';
import house from '../../../assets/img/Group.png';
import iconSearch from '../../../assets/img/search1.png';
import { useTranslation } from 'react-i18next';


export function IntoBar(){

    const {i18n} = useTranslation(['translation']);

    const changeLanguage = (code)=>{
        i18n.changeLanguage(code);
    }

    const location = useLocation();
    
    const showIconHouse = (location)=>{
        let display = false;
        switch (location.pathname) {
            case '/characters':
                return display = true;
            
            case '/houses':
                return display = true;
                    
            case '/timeline':
                return display = true;
                         
            default:
                return display = false;
        }
    }

    const showSearchBar = (location)=>{
        let display = false;
        switch (location.pathname) {
            case '/characters':
                return display = true;
            
            case '/houses':
                return display = true;
                    
            case '/timeline':
                return display = true;
                         
            default:
                return display = false;
        }
    }
    return(
        
        <nav className="c-intoBar">
           {showSearchBar(location) &&  
           <div className="c-intoBar__contentSearch">
           <label><img src={iconSearch}></img>
           <input type="text" className="c-intoBar__search" placeholder="Search..."></input>
           </label>
           </div>}
           {showIconHouse(location) && <NavLink className="c-intoBar__link"to="/"><img className="c-intoBar__img" src={house}></img></NavLink>}
            <button className="c-intoBar__link"to="/" onClick={()=> changeLanguage('es')}><img className="c-intoBar__img" src={logoSpain}></img></button>
            <button className="c-intoBar__link"to="/" onClick={()=> changeLanguage('en')}><img className="c-intoBar__img" src={logoEngland}></img></button>

        </nav>
        
    )
}