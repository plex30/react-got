import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Menu } from '../../core/components/Menu/Menu';
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import './HomePage.scss'
export function HomePage(){

    const {t} = useTranslation(['translation']);
    return(
        <div className="c-home">
        <IntoBar></IntoBar>
        <h1 className="c-home__title">{t('Games of thrones')}</h1>
        <Menu></Menu>
        </div>
    )
}