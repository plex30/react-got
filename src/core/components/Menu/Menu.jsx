import React from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
import '../../../styles/components/_menu.scss';


export function Menu(){
    const {t} = useTranslation(['translation']);
    return(
        <div>
        <nav className="c-menu">
           
            <NavLink className="c-menu--link" to="/houses" activeClassName="active">{t('Houses')}</NavLink>
            <NavLink className="c-menu--link" to="/characters" activeClassName="active">{t('Characters')}</NavLink>
            <NavLink className="c-menu--link" to="/timeline" activeClassName="active">{t('Timeline')}</NavLink>

        </nav>

        {/* <nav className="c-menuCollapse">
           
           <NavLink className="c-menu--link"to="/houses">{t('Houses')}</NavLink>
           <NavLink className="c-menu--link"to="/characters">{t('Characters')}</NavLink>
           <NavLink className="c-menu--link"to="/timeline">{t('Timeline')}</NavLink>

       </nav> */}

       
       </div>
    )
}