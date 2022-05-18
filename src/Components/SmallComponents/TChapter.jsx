import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TChapter({chapter1}) {
    const [chapter, setChapter] = useState({});
    const [story, setStory] = useState({});

    useEffect(() => {
        const fetchChapter = async () => {
          const res = await axios.get("/chapters/"+chapter1);
          setChapter(res.data);
        };
        const fetchStory = async () => {
            const res = await axios.get("/stories/"+chapter.idStory);
            setStory(res.data);
          };
          fetchChapter();
          fetchStory();

      }, [chapter.idStory]);

  console.log(story)
  return (
    <>
        {story.titleStory} : {chapter.titleChap}
    </>
  )
}
