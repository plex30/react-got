import React from "react";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";
 
export function HousesGallery(props) {
 
 return (
 <div className="c-house-gallery">
 <div className="row">
 {props.casa.map((casa, i) =>
 <div key={i} className="c-house-gallery__content col-12 col-sm-6 col-md-6 col-lg-2 ">
 <Link to={"/casas/" + casa.name}>
 <figure className="pb-5" key={i}>
 <img className="c-house-gallery__image" src={casa.logoURL} alt=""/>
 <figcaption className="c-house-gallery__name">{casa.name}</figcaption>
 </figure>
 </Link>
 </div>
 )}
 </div>
 </div>
 )
}