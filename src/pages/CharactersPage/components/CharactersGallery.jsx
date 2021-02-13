import React from 'react';
import { Link } from 'react-router-dom';
import "./CharactersGallery.scss";

export function CharacterGallery(props){

    
    return(
        <div className="c-characters-gallery">
        <div className="row">
        {props.charactersGallery.map((item, i)=>
        
        <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-2">
        <Link to={"/characters/" + item._id}>
        <figure>
            <img className="c-characters-gallery__img" src={item.image} alt={item.name}></img>
            <figcaption className="c-characters-gallery__name">{item.name}</figcaption>
        </figure>
        </Link>
        </div>
        )}
        </div>
        </div>
    )
}