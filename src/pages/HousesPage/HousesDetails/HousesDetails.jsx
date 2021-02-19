import React, { useEffect, useState } from "react";
import { API } from "../../../shared/consts/api.const";
import './HousesDetails.scss';
import { useParams } from 'react-router-dom';
import { IntoBar } from "../../../core/components/Into-Bar/IntoBar";
import { useTranslation } from "react-i18next/";
export function HousesDetails() {

    const {t} = useTranslation(['translation']);

    const [casa, setCasa] = useState(null);

    const {name} = useParams();

    const getCasa = () => {
        API.get('/api/show/houses/' + name).then((res) => {
            
            console.log(name)
          setCasa(res.data[0]);
          console.log(res.data)
        })
    }

    useEffect(getCasa, [])
    
    
    return (
        casa &&
        <div>
        <IntoBar></IntoBar>
       
        <div className="c-house">
            <div className="c-house__basic">
                <figure>
                    <img className="c-house__img" src={casa.logoURL} alt={casa.name}/>
                    <h2 className="c-house__name">{casa.name}</h2>
                </figure>
            </div>
            <div className="c-house__extra">

                <div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('WORDS')}</h3>       
                    <div className="c-house__extra__box__subtitle__text">
                        <p>{casa.words}</p>
                    </div>
                </div>

                <div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('SEAT')}</h3>
                    <div className="c-house__extra__box__subtitle__text">
                        <p>{casa.seat}</p>
                    </div>
                </div>

                <div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('REGION')}</h3>
                    <div className="c-house__extra__box__subtitle__text">
                        <p>{casa.region}</p>
                    </div>
                </div>

                <div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('ALLEGIANCES')}</h3>
                    <div className="c-house__extra__box__subtitle__text">
                        <p>{casa.allegiance}</p>
                    </div>
                </div>
                
                <div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('RELIGIONS')}</h3>            
                    <div className="c-house__extra__box__subtitle__text">
                        <p>{casa.religion}</p>
                    </div>
                </div>

                <div className="c-house__extra__box">
                    <h3 className="c-house__title">{t('FOUNDATION')}</h3>            
                    <div className="c-house__text">
                        <p>{casa.createdAt}</p>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}