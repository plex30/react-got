import React, { useEffect, useState } from "react";
import { API } from "../../shared/consts/api.const";
import {TimelineGallery} from "../TimelinePage/components/TimelineGallery";


export function TimelinePage() {

  const [timeline, setTimeline] = useState([]);

  const getTimeline = () => {
    API.get("/api/show/characters").then((res) => {
        setTimeline(res.data);
    });
  };

  useEffect(getTimeline, []);

  return (
    <div>
        <TimelineGallery timelinePage={timeline}></TimelineGallery>
        
    </div>
  );
}
