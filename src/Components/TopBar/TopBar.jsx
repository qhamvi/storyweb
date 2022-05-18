import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";
import Topic from "../SmallComponents/Topic";
import "./topbar.css";

export default function TopBar() {
  const { user , dispatch } = useContext(Context);
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const fetchTopic = async () => {
      const res = await axios.get("/topics");
      setTopics(res.data);
    };

    fetchTopic();
  }, []);
  let admin, collector ;
  if(user != null)
  {
    if(user.idRole == "Admin")
    {
      admin = true ;
    }
    else {
        admin = false ;
      }
    if(user.idRole =="Collector")
    {
      collector = true;
    }
    else {
      collector = false ;
    }
  }
  console.log(admin) 

  const handleLogout = () => {
    dispatch({type: "LOGOUT"}) ;
  }
  const PHOTO_URL = "http://localhost:5000/Photos/";

  return (
    <div className="top">
      <div className="topLeft">
        <p className="topList">
          <span className="topListItem">
            <Link className="link" to="/">
              WEBSTORY
            </Link>
          </span>
        </p>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <div className="dropdown">
              <i className="iconTopic fa-solid fa-tag"></i>
              <span>Thể loại </span>
              <div className="dropdown-content">
                <div className="sidebarTopic">
                  <ul className="sidebarTopicList">
                    {topics.map((topic, id) => (
                      <li className="sidebarTopicListItem" key={id}>
                        <i className="iconTopic fa-solid fa-tag"></i>
                        <Topic topic={topic} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="topListItem">
            <div className="dropdown">
              <i className="iconRange fa-solid fa-list-ul"></i>
              <span>Sắp xếp</span>
              <div className="dropdown-content">
                <div className="sidebarTopic">
                  <ul className="sidebarTopicList">
                    <li className="sidebarTopicListItem">
                      <i className="iconTopic fa-solid fa-rotate"></i>
                      <Link className="link" to="/search">
                        Truyện mới
                      </Link>
                    </li>
                    <li className="sidebarTopicListItem">
                      <i className="iconTopic fa-solid fa-check"></i>
                      <Link className="link" to="/search/full">
                        Truyện FULL
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li className="topListItem">
            <div className="container-1">
              <span className="icon">
                <input
                  name="inpSearch"
                  type="search"
                  id="search"
                  placeholder="Tìm kiếm..."
                />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className="dropdown">
            <img
              className="topImg "
              src={PHOTO_URL + user.PhotoFileName}
              alt=""
            />
            <i className="iconTopic fa-solid fa-sort-down"></i>
            <div className="dropdown-content">
              <div className="sidebarTopic">
                <ul className="sidebarTopicList">
                <Link className="link" to="/settings">
                <li className="sidebarTopicListItem">
                <i className="iconTopic fa-solid fa-user-gear"></i>Quản lí tài khoản
                  </li>
                   </Link>
                  
                  {admin && (
                  <Link className="link" to="/admin">
                    <li className="sidebarTopicListItem">
                    <i className="iconTopic fa-solid fa-screwdriver-wrench"></i>Trang Admin
                    </li>
                  </Link>
                   
                  )}
                  
                  <li className="sidebarTopicListItem" onClick={handleLogout}>
                    <i className="iconTopic fa-solid fa-power-off" ></i>{user && "Đăng xuất"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  Đăng nhập
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/signup">
                  Đăng kí
                </Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
