import "./sidebar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Topic from "../SmallComponents/Topic";
import TStory from "../SmallComponents/TStory";

import { Context } from "../../Context/Context";
import TChapter from "../SmallComponents/TChapter";
export default function SideBar() {
  const [topics, setTopics] = useState([]);
  const { user } = useContext(Context);

  const PHOTO_URL = "http://localhost:5000/Photos/";
  
  const [user1 , setUser1] = useState([]);

  useEffect(() => {
    const fetchTopic = async () => {
      const res = await axios.get("/topics");
      setTopics(res.data);
    };
    const fetchUser = async () => {
      const res = await axios.get("/users/"+ user.id);
      setUser1(res.data);
    }
    fetchTopic();
    fetchUser();
  }, []);
  
  //console.log(topics[0].nameTopic[0])
  //console.log(topics.nameRole);
  console.log(user1)
  // console.log(user)

  return (
    <div className="sidebar">
        { user ? (
      <div className="sidebarItem">
        <span className="sidebarTitle">HELLO {user1.fullName}</span>
        <img
        src={PHOTO_URL + user1.PhotoFileName}
        alt=""
        />
        <div className="sidebarItem">
          <span className="sidebarTitle">Truyện yêu thích</span>
          <ul className="sidebarList">
          {user1.like?.map((story1) => 
          <li className="sidebarListItemLike" key ={story1} >
            <Link className="link"  to={`/story/${story1}`}>
              <TStory story1={story1}/>
            </Link>
          </li> 
           )}
            {/* <li className="sidebarListItemLike">
            <Link className="link" to="/story/:storyId">
            Truyện 1
            </Link>
            </li> */}
           
           
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Truyện đang đọc</span>
          <ul className="sidebarList">
          {user1.history?.map((chapter1) => 
          <li className="sidebarListItemHistory" key ={chapter1} >
            <Link className="link"  to={`/chapters/${chapter1}`}>
              <TChapter chapter1={chapter1}/>
            </Link>
          </li> 
           )}
            {/* <li className="sidebarListItemHistory">
            <Link className="link" to="/chapter/:chapterId">
            Truyện 1 : Chương 1
            </Link>
            </li> */}
            
          </ul>
        </div>
      </div>
        ) : (
          <>
          </>
        )}
      <div className="sidebarItem">
        <span className="sidebarTitle">Thể loại truyện</span>
        <ul className="sidebarList">
          {topics.map((topic,id) =>
            <li className="sidebarListItem" key={id}>
            <i className="iconTopic fa-solid fa-tag"></i>
            <Topic topic={topic} />
            </li>
           )}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-pinterest-square"></i>
          <i className="topIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
