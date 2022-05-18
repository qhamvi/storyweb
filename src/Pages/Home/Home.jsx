import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar"
import Stories from "../../Components/Stories/Stories"
import "./home.css"
export default function Home() {
  const [stories, setStories] = useState([]);
      
    useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get("/stories")
      setStories(res.data)
    }
    fetchStories()
  },[])
  return (
    <>
      <div className='home'>
          <Stories stories={stories}/>
          <SideBar/>
        
      </div>
    </>

  )
}
