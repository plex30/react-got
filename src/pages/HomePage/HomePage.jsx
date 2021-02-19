import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Menu } from '../../core/components/Menu/Menu';
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
export function HomePage(){

    const {t} = useTranslation(['translation']);
    return(
        <div>
        <IntoBar></IntoBar>
        <h1>{t('Games of thrones')}</h1>
        <Menu></Menu>
        </div>
    )
}