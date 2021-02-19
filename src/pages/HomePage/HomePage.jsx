import React from 'react';
import { useTranslation } from 'react-i18next/';
import { Menu } from '../../core/components/Menu/Menu';

export function HomePage(){

    const {t} = useTranslation(['translation']);
    return(
        <div>
        
        <h1>{t('Games of thrones')}</h1>
        <Menu></Menu>
        </div>
    )
}