import React from "react";
import '../components/TimeGallery.scss'

export function TimelineGallery(props) {

  

  return (
    <div className="timeLineSectionMain">
    <div className="timeLineSection">
    <div className="startCircle">
    <span className="startCircle--number">
        0
    </span>
    </div>
      {props.timelinePage.map((character, i)=>
          <div index={i} className="c-timelineChar row"> 
            <figure className="col-xl-3">
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
    </div>
  );
}
