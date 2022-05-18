import "./singlechap.css";
import React, { useContext, useEffect, useState } from "react";
import ButtonChapter from "../../Mui_Components/ButtonChapter";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Story from "../SmallComponents/Story";
import Chap from "../SmallComponents/Chap";
import { Context } from "../../Context/Context";
export default function SingleChap() {
  const [chapter, setChapter] = useState([]);
  const [story, setStory] = useState([{}]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const {user} = useContext(Context)
  const [user1, setUser1] = useState([]);

  useEffect(() => {
    const fetchChapter = async () => {
      const res = await axios.get("/chapters/" + path);
      setChapter(res.data);
    };
    const fetchStory = async () => {
      const res = await axios.get("/stories");
      setStory(res.data);
    };
    const fetchUser = async () => {
      const res = await axios.get("/users/"+user.id);
      setUser1(res.data);
    };

    fetchChapter();
    fetchStory();
    fetchUser();
  }, [path]);

  //BUTTON TRUOC
  let truoc;
  for (let i = 0; i < story[0].listChap?.length; i++) {
    if (path == story[0].listChap[i] ) {
      truoc = story[0].listChap[i - 1];
    }
  }
  if (truoc == undefined) {
    // console.log("Đây là chương đầu");
    truoc= path;
  } else {
    console.log(truoc);
  }

  //BUTTON SAU
  // console.log(story[0].listChap);
  let sau;
  for (let i = 0; i < story[0].listChap?.length; i++) {
    if (path == story[0].listChap[i]) {
      sau = story[0].listChap[i + 1];
    }
  }
  if (sau == undefined) {
    // console.log("Đây là chương cuối cùng");
    sau= path;
  } else {
    console.log(sau);
  }

  //console.log(chapter);
  //GET dd/mm/yyyy
  const dmy = new Date(chapter.createDate);
  const d = dmy.getDate();
  const m = dmy.getMonth();
  const y = dmy.getFullYear();

  //READ AUTO
        var msg = new SpeechSynthesisUtterance();
        msg.volume = 1; // âm lượng (1 - 10)
        msg.rate = 1; // tốc độ nói (0.1 - 10) 
        msg.pitch = 2; // độ cao (0 - 2) 
        //msg.lang = "en-GB"; // set ngôn ngữ
        
        // ở đây mình chọn tiếng anh giọng nam
        //msg.text = "Hello world"; // nội dung
        msg.lang = "vi-VN"
        msg.text ="Sản vi vi xuất nội dung tự động cho tổng đài call center doanh nghiệp hoặc loa thông báo tự động. Đọc Văn Bản: Báo nói, Sách nói, Thuyết minh phim, Thu âm Bài học, Thu Âm lời chào tổng đài. Hỗ trợ giọng nói đa dạng. Tổng đài thông minh." ;
        //speechSynthesis.speak(msg); // có đủ rồi nói thôi 

  // function onload() {
  //   speechSynthesis.speak(msg);
  //   console.log(msg)
  //   speechSynthesis.stop(msg);
  // }      
  // function onstop() {
  //   speechSynthesis.pause(msg);
  // }
  // ADD HISTORY
  const markHistory = async (e) => {
    e.preventDefault();
    let result = user1.history ;
    result.push(path)
    const res = await axios.put("/users/history/"+user1.id, {
        history: result,
    });
    window.location.reload();
  }
  // console.log(user1.history)
  return (
    <div className="backgroundchap">
      <div className="singleChap" id="singleChap">
        <header>
          <div className="singleTitle">
            <p className="story-title">
              <Link to={`/story/${chapter.idStory}`} className="link">
                {story[0].titleStory}
              </Link>
            </p>
            <h2 className="chapter-title">{chapter.titleChap}</h2>
            <p className="datePushlish">
              {" "}
              {d}/{m}/{y}
            </p>
          </div>
        </header>
        <div className="doanhmuc">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>
            <Link to={`/chapter/${truoc}`} className="linkbtn">
                <i className="fa-solid fa-angle-left"></i>Trước
              </Link>
            </Button>
            <Button>
              {/* {story.map((v)=>
              <i className="icon fa-solid fa-list-ul" > 
              {v.listChap}
              </i>
              )} */}
              <div className="dropdown">
                <i className="icon fa-solid fa-list-ul">
                  <div className="dropdown-chap">
                    <div className="sidebarTopic">
                      <ul className="sTopicList">
                        {/* {story.map((v) => (
                          <li className="sTopicListItem">
                            <Link className="link" to="/search">
                              {v.listChap}
                            </Link>
                          </li>
                        ))} */}
                        {story[0].listChap?.map((chapter) => (
                          <li className="chap" key={chapter}>
                            <Chap chapter={chapter} story={story} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </i>
              </div>
            </Button>
            <Button onClick={markHistory}>
              <i className="fa-solid fa-marker"></i>
            </Button>
            <Button >
              <i className="fa-solid fa-book-open-reader">
                {/* <Chap chapter={chapter} story={story}/> */}
              </i>
            </Button>

            <Button>
              <Link to={`/chapter/${sau}`} className="linkbtn">
                Sau
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </Button>
          </ButtonGroup>
        </div>
        <div className="chapContent">
          {/* VHe <br /> hl <br />
          VHe <br /> hl <br /> */}
          {chapter.content}

         
        </div>
        <div className="doanhmuc">
          <ButtonChapter />
        </div>
      </div>
    </div>
  );
}
