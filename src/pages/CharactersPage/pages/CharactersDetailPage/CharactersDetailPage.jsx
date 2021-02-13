import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API } from "../../../../shared/consts/api.const";
import './CharactersDetailPage.scss';

export function CharactersDetailPage() {

    const [character, setCharacter] = useState(null);
    const [houseName, setHouseName] = useState(null);
    const [house, setHouse] = useState(null);

    const { name } = useParams();

    const getCharacterDetail = () => {
        API.get('/api/show/characters/' + name).then((res) => {
            setCharacter(res.data);
            setHouseName(res.data.house);
        });
    }

    const getHouse = () => {
        //if({character}){
            console.log(character);
            console.log(houseName);
            API.get('/api/show/houses/' + houseName).then((res) => {
                console.log(res.data);
                setHouse(res.data);
                console.log(res.data);
                //console.log({house}.logoURL);
            });
        //}
    }

    useEffect(getCharacterDetail, []);
    useEffect(getHouse, []);

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
                    <h3>HOUSE</h3>
                    <img src={house.logoURL} alt={house.name} />
                </div>
                <div className="c-char__extra__alleg">
                    <h3>ALLEGIANCES</h3>
                    <div>
                    {character.allegiances.map((allegiance, i)=>
                        <div key={i}>
                            <p>{allegiance}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__extra__appear">
                    <h3>APPEARANCES</h3>
                    <div>
                    {character.appearances.map((appearance, i)=>
                        <div key={i}>
                            <p>{appearance}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__extra__father">
                    <h3>FATHER</h3>
                    <div>
                        <p>{character.father}</p>
                    </div>
                </div>
                <div className="c-char__extra__sib">
                    <h3>SIBLINGS</h3>
                    <div>
                    {character.siblings.map((sibling, i)=>
                        <div key={i}>
                            <p>{sibling}</p>
                        </div>
                    )}
                    </div>
                </div>
                <div className="c-char__extra__titles">
                    <h3>TITLES</h3>
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