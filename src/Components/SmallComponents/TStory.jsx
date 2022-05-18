import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TStory({story1}) {
    const [story, setStory] = useState({});
    useEffect(() => {
        const fetchStory = async () => {
          const res = await axios.get("/stories/"+story1);
          setStory(res.data);
        };
      
        fetchStory();
      }, [story1]);

  return (
    <>
      {story.titleStory} 
    </>
  )
}
