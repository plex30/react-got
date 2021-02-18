import React from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom'
import './Menu.scss' 


export function Menu(){
    const {t} = useTranslation(['translation']);
    return(
        
        <nav className="c-menu">
           
            <NavLink className="c-menu--link"to="/houses">{t('Houses')}</NavLink>
            <NavLink className="c-menu--link"to="/characters">{t('Characters')}</NavLink>
            <NavLink className="c-menu--link"to="/timeline">{t('Timeline')}</NavLink>

        </nav>
        
    )
}