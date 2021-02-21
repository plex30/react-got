import React, { useEffect, useState } from "react";
import { IntoBar } from "../../core/components/Into-Bar/IntoBar";
import { Menu } from "../../core/components/Menu/Menu";
import { API } from "../../shared/consts/api.const";
import {TimelineGallery} from "../TimelinePage/components/TimelineGallery";


export function TimelinePage() {

  const [sortChars, setSortChars] = useState(0)

  function sortPeoplefunction(){
    
    setSortChars(sortChars + 1)

    if(sortChars % 2 != 0){
     const ascendente = timeline.sort(((a, b) => (a.age.age > b.age.age ? 1 : a.age.age < b.age.age ? -1 : 0)))
     setTimeline(ascendente)
     
    } else {
      const descendente = timeline.sort(((a, b) => (a.age.age < b.age.age ? 1 : a.age.age > b.age.age ? -1 : 0)))
     setTimeline(descendente)
     
    }
  }
  
  const [timeline, setTimeline] = useState([]);
  
  const getTimeline = () => {
    
    API.get("/api/show/characters").then((res) => {

        const localList = res.data;
        const notNull = [];
      
      for (let i = 0; i < localList.length; i++) {
        
       if (localList[i].age != null && localList[i].age.age != undefined && localList[i].name != 'Ellaria Sand') {
         notNull.push(localList[i])
         
       }
        
      }
      
      const sortedList = [...notNull].sort((a, b) => (a.age.age > b.age.age ? 1 : a.age.age < b.age.age ? -1 : 0))
        setTimeline(sortedList)

      

    });
  };


  useEffect(getTimeline, []);

  return (
    <div>
        <IntoBar></IntoBar>
        <TimelineGallery timelinePage={timeline} sortPeople={sortPeoplefunction} asc={sortChars}></TimelineGallery>
        <Menu></Menu>
    </div>
  );
}