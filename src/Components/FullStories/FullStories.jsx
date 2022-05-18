import axios from "axios";
import { useEffect, useState } from "react";
import FullStory from "../FullStory/FullStory"
import "./fullstories.css"

export default function FullStories() {
    const [stories, setStories] = useState([]);
      
    useEffect(() => {
    const fetchStories = async () => {
      const res = await axios.get("/stories/topic/full")
    //   console.log(res.data)
      setStories(res.data);
    }
    fetchStories();
  },[])
    return (

        <div className="Full">
            <div className="storiesTitle">
                <span className="titleStories">Truyện FULL</span>
                <i className="iconNext fa-solid fa-angle-right"></i>
            </div>
            <div className="frameFull">
                <div className='fullstories'>
                {stories?.map((p) => (
                        <FullStory p={p}/>
                    ))}
                </div>
                <div className="fullstoriesSeen">
                    <button className="buttonSeen">Xem thêm</button>
                    {/* <button className="buttonSeen" role="button">Xem thêm</button> */}

                </div>

            </div>
        </div>

    )
}
