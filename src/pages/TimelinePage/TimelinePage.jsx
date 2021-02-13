import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import {TimelineGallery} from "../TimelinePage/components/TimelineGallery";


export function TimelinePage() {

  const [timeline, setTimeline] = useState([]);
  
  const getTimeline = () => {
    
    API.get("/api/show/characters").then((res) => {

        const localList = res.data;
        const notNull = [];
      
      for (let i = 0; i < localList.length; i++) {
        
       if (localList[i].age != null && localList[i].age.age != undefined) {
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
        <TimelineGallery timelinePage={timeline}></TimelineGallery>
        
    </div>
  );
}