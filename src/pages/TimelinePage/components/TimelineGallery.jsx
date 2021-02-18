import React from "react";
import '../components/TimeGallery.scss'
import down2 from '../../../assets/img/down2.png'
import up2 from '../../../assets/img/up2.png'
export function TimelineGallery(props) {

  

  return (
    <div className="timeLineSectionMain">
    <div className="timeLineSection">
    <div className="startCircle" onClick={props.sortPeople}>
    <span className="startCircle--number">
    {props.asc % 2 != 0 ? <p>0</p> : <p>100</p>}
    </span>
   
    </div>
    {props.asc % 2 != 0 ? <img className="arrowTime"src={down2}></img> : <img className="arrowTime" src={up2}></img>}
     
      {props.timelinePage.map((character, i)=>
          <div key={i} className="c-timelineChar row"> 
            <figure className="col-xl-3">
            {
            character.name == 'Ellaria Sand' ? <h4>39</h4> :
                <h4>{character.age && character.age.age}</h4> }
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
