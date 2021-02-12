import React,{useEffect, useState} from 'react';
import { API } from '../../shared/consts/api.const';
import { PersonajesGallery } from './components/PersonajesGallery';

export function PersonajesPage(){

    const [characters, setCharacters] = useState([]);

    const getCharacters = ()=>{
        API.get('/api/show/characters').then((res)=>{
            setCharacters(res.data);
        })
    }

    useEffect(getCharacters, []);

    return(
        <div>
        
        <PersonajesGallery characterGallery={characters}></PersonajesGallery>
        </div>
    )
}