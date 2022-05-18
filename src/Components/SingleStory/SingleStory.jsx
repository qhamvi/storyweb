import "./singlestory.css";
import React, {useContext, useEffect, useState } from "react";
import ListChapNew from "../ListChapNew/ListChapNew";
import ListChapFull from "../ListChapFull/ListChapFull";
import ListComment from "../ListComment/ListComment";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../../Context/Context";

export default function SingleStory() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [story, setStory] = useState({});
  const { user } = useContext(Context);
  const [user1, setUser1] = useState({});

  const IMAGE_URL = "http://localhost:5000/Images/";
  //get dd/mm/yyyy
  const dmy = new Date(story.publishDate);
  const d = dmy.getDate();
  const m = dmy.getMonth();
  const y = dmy.getFullYear();



  useEffect(() => {
    const getStory = async () => {
      const res = await axios.get("/stories/" + path);
      setStory(res.data);
    };
    const getUser1 = async () => {
      const res = await axios.get("/users/" + user.id);
      // console.log(res.data)
      setUser1(res.data);
    };
   
    getStory();
    getUser1();
  }, [path]);
  console.log(story)
  // STATUS
  let trangthai;
  if (story.complete == true)
  {
    trangthai ="Hoàn thành" ;
  }
  else 
  {
    trangthai="Chưa hoàn" ;
  }
  console.log(trangthai)
  // ADD LIKE
  const addLike = async (e) => {
    e.preventDefault();
    let result = user1.like ;
    result.push(path)
    const res = await axios.put("/users/like/"+user1.id, {
        like: result,
    });
    window.location.reload();
  }
  // LOAD MORE
  const loadMoreSummary = (e) => {
    e.preventDefault();
    var line = document.getElementById("summaryStory");
    var btn = document.getElementById("btn-loadMoreSummary");

    if (line.style.webkitLineClamp <= 4) {
      line.style.webkitLineClamp = 999;
      btn.innerHTML = "Rút gọn";
    } else {
      line.style.webkitLineClamp = 4;
      btn.innerHTML = "Xem thêm";
    }
  };

  
  return (
    <div className="singleStory">
      {/* Trang chu / Ten truyen */}
      <div className="singlePage">
        <span className="titlePage">Trang chủ</span>
        <i className="iconNext fa-solid fa-angle-right"></i>
        <span className="titleStory">{story.titleStory}</span>
      </div>

      {/* Chi tiet truyen */}
      <div className="detailStory">
        <div className="detailShort">
          {story.ImageFileName && (
            <img
              className="storyImg"
              src={IMAGE_URL + story.ImageFileName}
              alt=""
            />
          )}

          <div className="detail">
            <div className="vivi">
              <p className="authorStory">Tác giả : {story.author}</p>
              <p className="topicStory">Thể loại: Ngôn tình, Võng du</p>
              <p className="editorStory">Người sưu tầm: {story.collector}</p>
              <p className="viewStory">Lượt xem: 1</p>
              <p className="statusStory">Trạng thái: {trangthai}</p>
              <p className="dateUpdateStory">
                Ngày cập nhật : {d}/{m}/{y}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="detailLong">
          <div className="title">
            <span className="title">{story.titleStory}</span>
          </div>
          <div className="tbody">
            <button className="dsChuong" ><i className="fa-solid fa-list-ul"></i><a className="dsc" href="#dsChap">Danh sách chương</a></button>
            <button className="trLike" onClick={addLike}><i className="fa-solid fa-heart"></i>Truyện yêu thích</button>   
          </div> 
          <div className="summary">
            <p className="summaryTitle">Tóm tắt:</p>
            <p className="summaryStory" id="summaryStory">
              {story.summary}
            </p>
          </div>
          <div className="xemthem">
            {/* <button className="btnXem"  >Xem thêm {color}</button> C1*/}
            <button
              className="btnXem"
              id="btn-loadMoreSummary"
              onClick={loadMoreSummary}
            >
              Xem thêm{" "}
            </button>
          </div>
        </div>
      </div>
      <ListChapNew story={story} />
      <div id="dsChap">
      <ListChapFull story={story} />
      </div>
      
      <ListComment story={story} />
    </div>
  );
}
