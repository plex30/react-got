import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from "../../../../shared/consts/api.const";
import './CharactersDetailPage.scss';
import logoDefault from '../../../../assets/img/logoDefault.jpeg';
import { useTranslation } from 'react-i18next/';

export function CharactersDetailPage() {
    const {t} = useTranslation(['translation']);
    const [character, setCharacter] = useState(null);
    //const [houseName, setHouseName] = useState(null);
    const [house, setHouse] = useState(null);

    const { name } = useParams();

    const getCharacterDetail = () => {
        API.get('/api/show/characters/' + name).then((res) => {
            setCharacter(res.data);
            
            const houseName = res.data.house;
            getHouse(houseName);
        });
    }

    const getHouse = (houseName) => {
            API.get('/api/show/houses/' + houseName).then((res) => {
                if (res.data[0] != null || res.data[0] != undefined) {
                    setHouse(res.data[0]);
                }else{
                    setHouse(res.data);
                }
            });
    }

    useEffect(getCharacterDetail, []);

    return (
        character && house &&
        <div className = "c-char">
            <div className= "c-char__basic">
                <figure>
                    <img src={character.image} alt={character.name} />
                    <h2>{character.name}</h2>
                </figure>
            </div>
            <div className= "c-char__extra">
                <div className="c-char__extra__alleg">
                    <h3>{t('HOUSE')}</h3>{
                            house.logoURL
                            ?<img src={house.logoURL} alt={house.name} />
                            :<img src= {logoDefault} alt={character.house} />
                        }       
                    </div>
                <div className="c-char__extra__alleg">
                    <h3>{t('ALLEGIANCES')}</h3>
                    <div>
                    {character.allegiances.map((allegiance, i)=>
                        <div key={i}>
                            <p>{allegiance}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__extra__appear">
                    <h3>{t('APPEARANCES')}</h3>
                    <div>
                    {character.appearances.map((appearance, i)=>
                        <div key={i}>
                            <p>{appearance}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__extra__father">
                    <h3>{t('FATHER')}</h3>
                    <div>
                        <p>{character.father}</p>
                    </div>
                </div>
                <div className="c-char__extra__sib">
                    <h3>{t('SIBLINGS')}</h3>
                    <div>
                    {character.siblings.map((sibling, i)=>
                        <div key={i}>
                            <p>{sibling}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__extra__titles">
                    <h3>{t('TITLES')}</h3>
                    <div>
                    {character.titles.map((title, i)=>
                        <div key={i}>
                            <p>{title}</p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div> 
    );
}