import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";

export default function Chap({chapter,story}) {
    const [chapters, setChapters] = useState([]);
      
    useEffect(() => {
    const fetchChapters = async () => {
      const res = await axios.get("/chapters/"+chapter)
      setChapters(res.data)
    }
    fetchChapters()
  },[])
  //console.log(chapters)
  //console.log(story)
    return (
        <>
        <Link to={`/chapter/${chapters.id}`} className="link">
            {chapters.titleChap}
        </Link>
        </>
    )
}
