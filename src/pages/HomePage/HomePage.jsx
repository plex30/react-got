import React from 'react';
import { useTranslation } from 'react-i18next/';

export function HomePage(){

    const {t} = useTranslation(['translation']);
    return(
        <h1>{t('Games of thrones')}</h1>
    )
}