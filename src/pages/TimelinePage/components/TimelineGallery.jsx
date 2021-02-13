import React from "react";
import '../components/TimeGallery.scss'

export function TimelineGallery(props) {

  

  return (
    <div>
      {props.timelinePage.map((character, i)=>
          <div index={i} className="c-timelineChar col-6"> 
            <figure>
                <h4>{character.age && character.age.age}</h4>
                <h4>{character.name}</h4>
                    <div className="c-timelineChar--div">
                <img className="c-timelineChar--div__img" src={character.image}></img>
                    </div>

            </figure>
          </div> 
      )
      }
    </div>
  );
}
