import React, { useContext } from 'react';
import {NavLink, useLocation} from 'react-router-dom'
import './intoBar.scss'
import logoSpain from '../../../assets/img/spain1.png';
import logoEngland from '../../../assets/img/united-kingdom\ 1.png';
import house from '../../../assets/img/Group.png';
import iconBack from '../../../assets/img/Vector.png';
import iconSearch from '../../../assets/img/search1.png';
import { useTranslation } from 'react-i18next';


export function IntoBar(props){

    const {t,i18n} = useTranslation(['translation']);

    const changeLanguage = (code)=>{
        i18n.changeLanguage(code);
    }
    
    const location = useLocation();
    const local = location.pathname;
    const dinChar = local.substring(11);
    const dinHouse = local.substring(7);
    const charPage = '/characters'+dinChar;


    const showIconHouse = (location)=>{
        
        let display = false;
        switch (location.pathname) {
            
            case '/characters':
                return display = true;
            case '/characters'+dinChar:
                    return display = true;
            case '/houses':
                return display = true;
            case '/houses'+dinHouse:
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
                return display = false;
                         
            default:
                return display = false;
        }
    }

    const showIconBack= (location)=>{
        let display = false;
        switch (location.pathname) {
            case '/characters':
                return display = false;

            case '/characters'+dinChar:
                return display = true;  
             
            case '/houses':
                return display = false;

            case '/houses'+dinHouse:
                return display = true;     
                    
            case '/timeline':
                return display = false;
                         
            default:
                return display = false;
        }
    }

   
    return(
        <div>
        <nav className="c-intoBar">
           {showSearchBar(location) &&  
           <div className="c-intoBar__contentSearch">
           <label><img src={iconSearch} className="iconSearch"></img>
           <input type="text" className="c-intoBar__search" placeholder="Search..." onInput={props.handleChange}></input>
           </label>
           </div>}
           {showIconBack(location) && location.pathname == charPage ? <NavLink className="c-intoBar__imgBack" to="/characters"><img className="c-intoBar__imgBack" src={iconBack}></img><span className="span">{t('Back')}</span></NavLink> 
           :showIconBack(location) && <NavLink className="c-intoBar__imgBack" to="/houses"><img className="c-intoBar__imgback" src={iconBack}></img><span className="span">{t('Back')}</span></NavLink>}
           <div className="c-intoBar__button">
           {showIconHouse(location) && <NavLink className="c-intoBar__link" to="/"><img className="c-intoBar__imghouse" src={house}></img></NavLink>}
            <button className="c-intoBar__link" to="/" onClick={()=> changeLanguage('es')}><img className="c-intoBar__img" src={logoSpain}></img></button>
            <button className="c-intoBar__link" to="/" onClick={()=> changeLanguage('en')}><img className="c-intoBar__img" src={logoEngland}></img></button>
           </div>
        </nav>

        {/* <nav role="navigation">
        <div id="menuToggle">
    
            <input type="checkbox" />
    
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="/"><li>{t('Home')}</li></a>
      <a href="/houses"><li>{t('Houses')}</li></a>
      <a href="/characters"><li>{t('Characters')}</li></a>
      <a href="/timeline"><li>{t('Timeline')}</li></a>
      <li><div className="c-intoBar__button">
           {showIconHouse(location) && <NavLink className="c-intoBar__link"to="/"><img className="c-intoBar__imghouse" src={house}></img></NavLink>}
            <button className="c-intoBar__link"to="/" onClick={()=> changeLanguage('es')}><img className="c-intoBar__img" src={logoSpain}></img></button>
            <button className="c-intoBar__link"to="/" onClick={()=> changeLanguage('en')}><img className="c-intoBar__img" src={logoEngland}></img></button>
           </div></li>
    </ul>
  </div>
</nav> */}
        </div>
    )
}