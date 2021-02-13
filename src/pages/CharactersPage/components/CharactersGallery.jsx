import React from 'react';
import { Link } from 'react-router-dom';

export function CharacterGallery(props){

    
    return(
        <div>
        <div className="row">
        {props.charactersGallery.map((item, i)=>
        
        <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Link to={"/characters/" + item.name}>
        <figure >
            <img src={item.image} alt={item.name}></img>
            <figcaption>{item.name}</figcaption>
        </figure>
        </Link>
        </div>
        )}
        </div>
        </div>
    )
}